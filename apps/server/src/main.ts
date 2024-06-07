import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv'
config();

console.log('DATABASE_URL:', process.env.DATABASE_URL);
console.log(process.env.PORT, 'port');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 5000;
  app.enableCors();
  await app.listen(port);
}
bootstrap();
