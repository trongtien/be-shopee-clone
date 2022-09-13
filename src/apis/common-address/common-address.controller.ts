import {
  Controller,
  Get,
  UseGuards,
  InternalServerErrorException,
  Param,
} from '@nestjs/common';
import {
  ApiHeader,
  ApiOkResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CommonAddressService } from './common-address.service';
import { Role_Get_Api } from '../../enums/role.enum';
import RoleGuard from '../../libs/role/role-guard';
import { ListProviceDTO } from './dto/listProvince.dto';
import { ListDistrictDto } from './dto/list-disstrict.dto';
import { ListWardDTO } from './dto/list-ward.dto';

@Controller('common-address')
@ApiTags('common-location')
export class CommonAddressController {
  constructor(private readonly commonAddressService: CommonAddressService) {}

  @Get('province')
  @ApiHeader({
    name: 'x-api-key-system',
    description: 'Key get api',
  })
  @UseGuards(RoleGuard(Role_Get_Api.SYSTEM))
  @ApiResponse({ status: 201, description: 'Get Susscess full' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @ApiOkResponse({ status: 200, type: ListProviceDTO })
  async getProvinceSystem() {
    try {
      const categoriesKeySearch =
        await this.commonAddressService.getAllProvice();
      return categoriesKeySearch;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  @Get('district/:provice_id')
  @ApiHeader({
    name: 'x-api-key-system',
    description: 'Key get api',
  })
  @UseGuards(RoleGuard(Role_Get_Api.SYSTEM))
  @ApiResponse({ status: 201, description: 'Get Susscess full' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @ApiOkResponse({ status: 200, type: ListDistrictDto })
  async getDistrichSystem (@Param("provice_id") provinceId: number) {
    try {
      const categoriesKeySearch = await this.commonAddressService.findDitrictByProvince(provinceId);
      return categoriesKeySearch;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  @Get('ward/:districh_id')
  @ApiHeader({
    name: 'x-api-key-system',
    description: 'Key get api',
  })
  @UseGuards(RoleGuard(Role_Get_Api.SYSTEM))
  @ApiResponse({ status: 201, description: 'Get Susscess full' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @ApiOkResponse({ status: 200, type: ListWardDTO })
  async getWardsSystem (@Param("districh_id") districhId: number) {
    try {
      const categoriesKeySearch = await this.commonAddressService.findWardManyByDistrich(districhId);
      return categoriesKeySearch;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
