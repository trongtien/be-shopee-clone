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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonAddressController = void 0;
const openapi = require("@nestjs/swagger");
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const common_address_service_1 = require("./common-address.service");
const role_enum_1 = require("../../enums/role.enum");
const role_guard_1 = require("../../libs/role/role-guard");
const listProvince_dto_1 = require("./dto/listProvince.dto");
const list_disstrict_dto_1 = require("./dto/list-disstrict.dto");
const list_ward_dto_1 = require("./dto/list-ward.dto");
let CommonAddressController = class CommonAddressController {
    constructor(commonAddressService) {
        this.commonAddressService = commonAddressService;
    }
    async getProvinceSystem() {
        try {
            const categoriesKeySearch = await this.commonAddressService.getAllProvice();
            return categoriesKeySearch;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error);
        }
    }
    async getDistrichSystem(provinceId) {
        try {
            const categoriesKeySearch = await this.commonAddressService.findDitrictByProvince(provinceId);
            return categoriesKeySearch;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error);
        }
    }
    async getWardsSystem(districhId) {
        try {
            const categoriesKeySearch = await this.commonAddressService.findWardManyByDistrich(districhId);
            return categoriesKeySearch;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error);
        }
    }
};
__decorate([
    (0, common_1.Get)('province'),
    (0, swagger_1.ApiHeader)({
        name: 'x-api-key-system',
        description: 'Key get api',
    }),
    (0, common_1.UseGuards)((0, role_guard_1.default)(role_enum_1.Role_Get_Api.SYSTEM)),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Get Susscess full' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden' }),
    (0, swagger_1.ApiOkResponse)({ status: 200, type: listProvince_dto_1.ListProviceDTO }),
    openapi.ApiResponse({ status: 200, type: [require("./dto/listProvince.dto").ListProviceDTO] }),
    openapi.ApiResponse({ status: 200, type: [require("./dto/listProvince.dto").ListProviceDTO] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CommonAddressController.prototype, "getProvinceSystem", null);
__decorate([
    (0, common_1.Get)('district/:provice_id'),
    (0, swagger_1.ApiHeader)({
        name: 'x-api-key-system',
        description: 'Key get api',
    }),
    (0, common_1.UseGuards)((0, role_guard_1.default)(role_enum_1.Role_Get_Api.SYSTEM)),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Get Susscess full' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden' }),
    (0, swagger_1.ApiOkResponse)({ status: 200, type: list_disstrict_dto_1.ListDistrictDto }),
    openapi.ApiResponse({ status: 200, type: Object }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)("provice_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CommonAddressController.prototype, "getDistrichSystem", null);
__decorate([
    (0, common_1.Get)('ward/:districh_id'),
    (0, swagger_1.ApiHeader)({
        name: 'x-api-key-system',
        description: 'Key get api',
    }),
    (0, common_1.UseGuards)((0, role_guard_1.default)(role_enum_1.Role_Get_Api.SYSTEM)),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Get Susscess full' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden' }),
    (0, swagger_1.ApiOkResponse)({ status: 200, type: list_ward_dto_1.ListWardDTO }),
    openapi.ApiResponse({ status: 200, type: Object }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)("districh_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CommonAddressController.prototype, "getWardsSystem", null);
CommonAddressController = __decorate([
    (0, common_1.Controller)('common-address'),
    (0, swagger_1.ApiTags)('common-location'),
    __metadata("design:paramtypes", [common_address_service_1.CommonAddressService])
], CommonAddressController);
exports.CommonAddressController = CommonAddressController;
//# sourceMappingURL=common-address.controller.js.map