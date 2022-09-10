import { PartialType } from '@nestjs/swagger';
import { QueryBaseDTO } from '../../../libs/dto/query-base.dto';

export class QueryProductSystemDto extends PartialType(QueryBaseDTO) {}
