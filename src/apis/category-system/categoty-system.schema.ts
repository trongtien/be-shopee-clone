import { ApiProperty } from "@nestjs/swagger";

export class CategorySystemKeySearchSchema {
    @ApiProperty()
    id: string;

    @ApiProperty()
    uuid: string;

    @ApiProperty()
    name: string;
}

export class CategorySystemSchema{
    @ApiProperty()
    id: number;

    @ApiProperty()
    uuid: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    image_reasize: string;

    @ApiProperty()
    image: string;

    @ApiProperty()
    path: string;
}