"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonAddressService = void 0;
const common_1 = require("@nestjs/common");
const PrismaServiceBase_1 = require("../../libs/core/PrismaServiceBase");
let CommonAddressService = class CommonAddressService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAllProvice() {
        const dataList = await this.prisma.province.findMany({
            select: { provinceId: true, uuid: true, name: true },
            orderBy: {
                name: 'desc',
            },
        });
        return dataList;
    }
    async findDitrictByProvince(proviceId) {
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
    async findWardManyByDistrich(districQuery) {
        const checkIdDistrich = this.findDistrich(districQuery);
        if (checkIdDistrich === null || !checkIdDistrich) {
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
        });
        return wards;
    }
    async isFindProvince(proviceIdQuery) {
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
    async findDistrich(districQuery) {
        const ward = await this.prisma.district.findUnique({
            where: {
                districtId: Number(districQuery)
            }
        });
        return ward;
    }
};
CommonAddressService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [PrismaServiceBase_1.PrismaServiceBase])
], CommonAddressService);
exports.CommonAddressService = CommonAddressService;
//# sourceMappingURL=common-address.service.js.map