import { Module } from '@nestjs/common';
import { SecretController } from './secret.controller';
import { SecretService } from './secret.service';
import { SecretManagerServiceClient } from '@google-cloud/secret-manager';

@Module({
  controllers: [SecretController],
  exports: [SecretService, SecretManagerServiceClient],
  providers: [SecretService, SecretManagerServiceClient],
})
export class SecretModule {}
