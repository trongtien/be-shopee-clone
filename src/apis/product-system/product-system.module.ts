import { Module } from '@nestjs/common';
import { ProductSystemService } from './product-system.service';
import { ProductSystemController } from './product-system.controller';
import { PrismaServiceBase } from '../../libs/core/PrismaServiceBase';

@Module({
  controllers: [ProductSystemController],
  providers: [ProductSystemService, PrismaServiceBase]
})
export class ProductSystemModule {}
