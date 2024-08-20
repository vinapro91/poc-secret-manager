import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Param,
  Body,
} from '@nestjs/common';
import { SecretService } from './secret.service';

@Controller('secret')
export class SecretController {
  constructor(private readonly secretService: SecretService) {}

  @Post()
  async createSecret(
    @Body('id') id: string,
    @Body('value') value: string,
  ): Promise<any> {
    const secret = await this.secretService.createSecret(id, value);
    return secret;
  }

  @Get(':id')
  async getSecret(@Param('id') id: string): Promise<any> {
    const secret = await this.secretService.getSecret(id);
    return secret;
  }

  @Delete(':id')
  async deleteSecret(@Param('id') id: string): Promise<any> {
    await this.secretService.deleteSecret(id);
    return { message: 'Secret deleted successfully.' };
  }

  @Put(':id')
  async updateSecret(
    @Param('id') id: string,
    @Body('value') value: string,
  ): Promise<any> {
    const secret = await this.secretService.updateSecret(id, value);
    return secret;
  }
}
