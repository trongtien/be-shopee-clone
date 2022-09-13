import { Module } from '@nestjs/common';
import { CommonAddressService } from './common-address.service';
import { CommonAddressController } from './common-address.controller';
import { PrismaServiceBase } from '../../libs/core/PrismaServiceBase';

@Module({
  controllers: [CommonAddressController],
  providers: [CommonAddressService, PrismaServiceBase]
})
export class CommonAddressModule { }
