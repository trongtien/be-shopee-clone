import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './libs/core/app/app.module';
import { CorsMiddlewareConfig } from './config/cors.middleware';
import { swaggerConfig } from './config/swagger';
import { BaseHttpException } from './libs/core/BaseHttpException';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: CorsMiddlewareConfig,
  });

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document, {
    customCssUrl: '/custom.css'
  });


  app.useGlobalFilters(new BaseHttpException());
  await app.listen(3000);
}
bootstrap();
