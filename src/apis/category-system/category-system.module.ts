import { Module } from '@nestjs/common';
import { CategorySystemService } from './category-system.service';
import { CategorySystemController } from './category-system.controller';

@Module({
  providers: [CategorySystemService],
  controllers: [CategorySystemController]
})
export class CategoriSystemModule {}
