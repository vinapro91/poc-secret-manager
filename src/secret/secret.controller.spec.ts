import { Test, TestingModule } from '@nestjs/testing';
import { SecretController } from './secret.controller';
import { SecretService } from './secret.service';

describe('SecretController', () => {
  let controller: SecretController;
  let service: SecretService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SecretController],
      providers: [
        {
          provide: SecretService,
          useValue: {
            getSecret: jest.fn().mockResolvedValue('secret-value'),
            createSecret: jest
              .fn()
              .mockResolvedValue({ id: 'secret-id', value: 'secret-value' }),
            deleteSecret: jest.fn().mockResolvedValue({}),
            updateSecret: jest
              .fn()
              .mockResolvedValue({
                id: 'secret-id',
                value: 'new-secret-value',
              }),
          },
        },
      ],
    }).compile();

    controller = module.get<SecretController>(SecretController);
    service = module.get<SecretService>(SecretService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getSecret', () => {
    it('should return the secret value', async () => {
      const secretId = 'secret-id';
      expect(await controller.getSecret(secretId)).toBe('secret-value');
      expect(service.getSecret).toHaveBeenCalledWith(secretId);
    });
  });

  describe('createSecret', () => {
    it('should create a secret and return it', async () => {
      const secretId = 'secret-id';
      const secretValue = 'secret-value';
      expect(await controller.createSecret(secretId, secretValue)).toEqual({
        id: secretId,
        value: secretValue,
      });
      expect(service.createSecret).toHaveBeenCalledWith(secretId, secretValue);
    });
  });

  describe('deleteSecret', () => {
    it('should delete a secret', async () => {
      const secretId = 'secret-id';
      await controller.deleteSecret(secretId);
      expect(service.deleteSecret).toHaveBeenCalledWith(secretId);
    });
  });

  describe('updateSecret', () => {
    it('should update a secret and return it', async () => {
      const secretId = 'secret-id';
      const newSecretValue = 'new-secret-value';
      expect(await controller.updateSecret(secretId, newSecretValue)).toEqual({
        id: secretId,
        value: newSecretValue,
      });
      expect(service.updateSecret).toHaveBeenCalledWith(
        secretId,
        newSecretValue,
      );
    });
  });
});
