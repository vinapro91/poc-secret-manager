import { Injectable } from '@nestjs/common';
import { SecretManagerServiceClient } from '@google-cloud/secret-manager';

@Injectable()
export class SecretService {
  private readonly projectId = process.env.GCP_PROJECT_ID;
  constructor(
    private readonly secretManagerServiceClient: SecretManagerServiceClient,
  ) {}

  async createSecret(secretId: string, secretValue: string): Promise<any> {
    secretId = secretId.replace(/\s/g, '').toLocaleLowerCase();
    const parent = `projects/${this.projectId}`;
    const [secret] = await this.secretManagerServiceClient.createSecret({
      parent: parent,
      secretId: secretId,
      secret: {
        replication: {
          automatic: {},
        },
      },
    });
    const [version] = await this.secretManagerServiceClient.addSecretVersion({
      parent: secret.name,
      payload: {
        data: Buffer.from(secretValue, 'utf8'),
      },
    });
    return version;
  }

  async getSecret(secretId: string): Promise<any> {
    secretId = secretId.replace(/\s/g, '').toLocaleLowerCase();
    const name = `projects/${this.projectId}/secrets/${secretId}/versions/latest`;
    try {
      const [version] =
        await this.secretManagerServiceClient.accessSecretVersion({
          name: name,
        });
      return version.payload.data.toString();
    } catch (e) {
      return null;
    }
  }

  async deleteSecret(secretId: string): Promise<any> {
    secretId = secretId.replace(/\s/g, '').toLocaleLowerCase();
    const name = `projects/${this.projectId}/secrets/${secretId}`;
    await this.secretManagerServiceClient.deleteSecret({
      name: name,
    });
  }

  async updateSecret(secretId: string, secretValue: string): Promise<any> {
    secretId = secretId.replace(/\s/g, '').toLocaleLowerCase();
    const name = `projects/${this.projectId}/secrets/${secretId}`;
    await this.secretManagerServiceClient.updateSecret({
      secret: {
        name: name,
        replication: {
          automatic: {},
        },
      },
      updateMask: {
        paths: ['replication'],
      },
    });
    const [version] = await this.secretManagerServiceClient.addSecretVersion({
      parent: name,
      payload: {
        data: Buffer.from(secretValue, 'utf8'),
      },
    });
    return version;
  }
}
