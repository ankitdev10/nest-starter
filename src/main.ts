import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppConfig } from './config/configuration';
async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    const config = app.get(ConfigService<AppConfig, true>);
    const apiOptions = config.get('apiOptions', { infer: true });
    await app.listen(apiOptions.port, apiOptions.host);
  } catch (error) {
    console.log(error);
  }
}
bootstrap();
