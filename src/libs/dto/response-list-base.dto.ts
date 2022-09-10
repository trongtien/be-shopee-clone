import { ApiProperty } from "@nestjs/swagger";

export class PageMetaDto<T> {

  @ApiProperty({ isArray: true })
  readonly items: T[];

  @ApiProperty()
  readonly page: number;

  @ApiProperty()
  readonly limit: number;

  constructor({ page, limit }) {
    this.page = Number(page);
    this.limit = Number(limit);
  }
}