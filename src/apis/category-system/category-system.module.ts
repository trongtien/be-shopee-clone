import { Module } from '@nestjs/common';
import { CategorySystemService } from './category-system.service';
import { CategorySystemController } from './category-system.controller';
import { PrismaServiceBase } from '../../libs/core/PrismaServiceBase';

@Module({
  providers: [CategorySystemService, PrismaServiceBase],
  controllers: [CategorySystemController]
})
export class CategoriSystemModule {}
