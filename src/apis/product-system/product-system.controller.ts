import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ApiHeader, ApiOkResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { QueryProductSystemDto } from './dto/query-product-system.dto';
import { ProductSystemService } from './product-system.service';
import RoleGuard from '../../libs/role/role-guard';
import { Role_Get_Api } from '../../enums/role.enum';
import { ListProductSystemDTO } from './dto/list-product.-system.dto';
// import { CreateProductSystemDto } from './dto/create-product-system.dto';
// import { UpdateProductSystemDto } from './dto/update-product-system.dto';

@Controller('product-system')
@ApiTags('product-system')
export class ProductSystemController {
  constructor(private readonly productSystemService: ProductSystemService) {}


  @Get()
  @ApiHeader({
    name: 'x-api-key-system',
    description: 'Key get api',
  })
  @UseGuards(RoleGuard(Role_Get_Api.SYSTEM))
  @ApiResponse({ status: 201, description: 'Get Susscess full'})
  @ApiResponse({ status: 403, description: 'Forbidden'})
  @ApiOkResponse({ status: 200,  type: ListProductSystemDTO })
  findAll(@Query() query: QueryProductSystemDto): ListProductSystemDTO[] {
    return this.productSystemService.findAll(query);
  }


  // @Post()
  // create(@Body() createProductSystemDto: CreateProductSystemDto) {
  //   return this.productSystemService.create(createProductSystemDto);
  // }

  
  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.productSystemService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateProductSystemDto: UpdateProductSystemDto) {
  //   return this.productSystemService.update(+id, updateProductSystemDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.productSystemService.remove(+id);
  // }
}
