import { PartialType } from '@nestjs/swagger';
import { CreateProductSystemDto } from './create-product-system.dto';

export class UpdateProductSystemDto extends PartialType(CreateProductSystemDto) {}
