import { Module } from '@nestjs/common';
import { ProductSystemService } from './product-system.service';
import { ProductSystemController } from './product-system.controller';

@Module({
  controllers: [ProductSystemController],
  providers: [ProductSystemService]
})
export class ProductSystemModule {}
