import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SecretModule } from './secret/secret.module';

@Module({
  imports: [SecretModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
