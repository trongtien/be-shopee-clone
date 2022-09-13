import { Injectable } from '@nestjs/common';
import { PrismaServiceBase } from '../../libs/core/PrismaServiceBase';
import { ListProviceDTO } from './dto/listProvince.dto';
import { District } from '@prisma/client';

@Injectable()
export class CommonAddressService {
  constructor(private prisma: PrismaServiceBase) {}

  async getAllProvice(): Promise<ListProviceDTO[]> {
    const dataList = await this.prisma.province.findMany({
      select: { provinceId: true, uuid: true, name: true },
      orderBy: {
        name: 'desc',
      },
    });

    return dataList as ListProviceDTO[];
  }

  async findDitrictByProvince(proviceId: number) {
    const isCheckIdProvice = await this.isFindProvince(proviceId);

    if (!isCheckIdProvice) {
      return {
        err: 'Provice Id not exist',
      };
    }

    const districtRepository = await this.prisma.district.findMany({
      select: {
        districtId: true,
        name: true,
        provinceId: true,
        uuid: true,
      },
      where: {
        provinceId: Number(proviceId),
      },
    });

    return districtRepository;
  }

  async findWardManyByDistrich(districQuery: number) {
    const checkIdDistrich = this.findDistrich(districQuery);


    if( checkIdDistrich === null || !checkIdDistrich){
      return {
        err: 'District Id not exist',
      };
    }

    const wards = this.prisma.ward.findMany({
      select: {
        uuid: true,
        wardId: true,
        districtId: true,
        name: true
      },
      where: {
        districtId: Number(districQuery)
      }
    })

    return wards;
  }

  async isFindProvince(proviceIdQuery: number): Promise<boolean> {
    const province = await this.prisma.province.findUnique({
      where: {
        provinceId: Number(proviceIdQuery),
      },
    });


    if (province === null) {
      return false;
    }

    return true;
  }

  async findDistrich(districQuery: number): Promise<District | null>{
    const ward = await this.prisma.district.findUnique({
      where: {
        districtId: Number(districQuery)
      }
    })

    return ward;
  }
}
