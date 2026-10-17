import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('');
  await app.listen(3000);
  console.log('UniversitySystemAPI is running at http://localhost:3000');
}
bootstrap();
