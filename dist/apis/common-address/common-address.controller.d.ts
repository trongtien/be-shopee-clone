import { CommonAddressService } from './common-address.service';
import { ListProviceDTO } from './dto/listProvince.dto';
export declare class CommonAddressController {
    private readonly commonAddressService;
    constructor(commonAddressService: CommonAddressService);
    getProvinceSystem(): Promise<ListProviceDTO[]>;
    getDistrichSystem(provinceId: number): Promise<{
        uuid: string;
        name: string;
        provinceId: number;
        districtId: number;
    }[] | {
        err: string;
    }>;
    getWardsSystem(districhId: number): Promise<{
        uuid: string;
        name: string;
        districtId: number;
        wardId: number;
    }[] | {
        err: string;
    }>;
}
