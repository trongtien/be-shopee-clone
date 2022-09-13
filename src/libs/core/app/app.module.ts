import helmet from 'helmet';
import { APP_FILTER } from '@nestjs/core';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { LoggerMiddleware } from '../../../config/logger.middleware';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriSystemModule } from '../../../apis/category-system/category-system.module';
import { ProductSystemModule } from '../../../apis/product-system/product-system.module';
import { BaseHttpException } from '../BaseHttpException';
import { CommonAddressModule } from '../../../apis/common-address/common-address.module';

@Module({
  imports: [
    CategoriSystemModule, 
    ProductSystemModule,
    CommonAddressModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: BaseHttpException,
    }
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(helmet(), LoggerMiddleware).forRoutes("*")
  }
}
