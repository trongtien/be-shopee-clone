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

  // app.useStaticAssets(join(__dirname, '..', 'public'));

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);

  app.useGlobalFilters(new BaseHttpException());
  await app.listen(3000);
}
bootstrap();
