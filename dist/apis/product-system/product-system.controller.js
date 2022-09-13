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
exports.ProductSystemController = void 0;
const openapi = require("@nestjs/swagger");
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const query_product_system_dto_1 = require("./dto/query-product-system.dto");
const product_system_service_1 = require("./product-system.service");
const role_guard_1 = require("../../libs/role/role-guard");
const role_enum_1 = require("../../enums/role.enum");
const list_product__system_dto_1 = require("./dto/list-product.-system.dto");
const response_list_base_dto_1 = require("../../libs/dto/response-list-base.dto");
let ProductSystemController = class ProductSystemController {
    constructor(productSystemService) {
        this.productSystemService = productSystemService;
    }
    findAll(query) {
        return this.productSystemService.findAll(query);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiHeader)({
        name: 'x-api-key-system',
        description: 'Key get api',
    }),
    (0, common_1.UseGuards)((0, role_guard_1.default)(role_enum_1.Role_Get_Api.SYSTEM)),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Get Susscess full' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden' }),
    (0, swagger_1.ApiOkResponse)({ status: 200, type: list_product__system_dto_1.ListProductSystemDTO }),
    openapi.ApiResponse({ status: 200 }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [query_product_system_dto_1.QueryProductSystemDto]),
    __metadata("design:returntype", response_list_base_dto_1.PageMetaDto)
], ProductSystemController.prototype, "findAll", null);
ProductSystemController = __decorate([
    (0, common_1.Controller)('product-system'),
    (0, swagger_1.ApiTags)('product-system'),
    __metadata("design:paramtypes", [product_system_service_1.ProductSystemService])
], ProductSystemController);
exports.ProductSystemController = ProductSystemController;
//# sourceMappingURL=product-system.controller.js.map