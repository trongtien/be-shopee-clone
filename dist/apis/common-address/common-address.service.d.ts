import { PrismaServiceBase } from '../../libs/core/PrismaServiceBase';
import { ListProviceDTO } from './dto/listProvince.dto';
import { District } from '@prisma/client';
export declare class CommonAddressService {
    private prisma;
    constructor(prisma: PrismaServiceBase);
    getAllProvice(): Promise<ListProviceDTO[]>;
    findDitrictByProvince(proviceId: number): Promise<{
        uuid: string;
        name: string;
        provinceId: number;
        districtId: number;
    }[] | {
        err: string;
    }>;
    findWardManyByDistrich(districQuery: number): Promise<{
        uuid: string;
        name: string;
        districtId: number;
        wardId: number;
    }[] | {
        err: string;
    }>;
    isFindProvince(proviceIdQuery: number): Promise<boolean>;
    findDistrich(districQuery: number): Promise<District | null>;
}
