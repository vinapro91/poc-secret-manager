import { Module } from '@nestjs/common';
import { SecretModule } from './secret/secret.module';

@Module({
  imports: [SecretModule],
})
export class AppModule {}
