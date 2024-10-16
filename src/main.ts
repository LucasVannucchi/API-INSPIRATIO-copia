import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

import { ValidationPipe } from '@nestjs/common';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { urlencoded } from 'body-parser';

// função inicial
async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  //validação dos dados de forma automatica
  app.useGlobalPipes(new ValidationPipe());

  app.enableCors();

  app.setGlobalPrefix('api/v1');

  // usado pra swagger
  const config = new DocumentBuilder()
    .setTitle('API INSPIRATIO - CODE INNOVE')
    .setDescription('API for sign terms and contracts')
    .setVersion('0.1')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  app.use(urlencoded({ extended: true }));

  //inicial port 3000
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
