import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { LoggerMiddleware } from '../config/logger.middleware';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import helmet from 'helmet';
import { CategoriSystemModule } from '../apis/category-system/category-system.module';
import { ProductSystemModule } from '../apis/product-system/product-system.module';

@Module({
  imports: [CategoriSystemModule, ProductSystemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(helmet(), LoggerMiddleware).forRoutes("*")
  }
}
