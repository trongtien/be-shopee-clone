import { ApiProperty } from '@nestjs/swagger';

export class QueryBaseDTO {
  @ApiProperty({
    description: 'The page of list',
    minimum: 1,
    default: 1,
  })
  page: number;

  @ApiProperty({
    description: 'The limit of list',
    minimum: 10,
    default: 20,
  })
  limit: number;
}


export class ReponseRepositoy<T> {
  status: boolean;
  error: string;
  data: T
}
