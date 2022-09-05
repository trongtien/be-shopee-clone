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
exports.CategorySystemController = void 0;
const common_1 = require("@nestjs/common");
const role_guard_1 = require("../../libs/role/role-guard");
const role_enum_1 = require("../../enums/role.enum");
const category_system_service_1 = require("./category-system.service");
const swagger_1 = require("@nestjs/swagger");
const categoty_system_schema_1 = require("./categoty-system.schema");
let CategorySystemController = class CategorySystemController {
    constructor(categoryService) {
        this.categoryService = categoryService;
    }
    async getCategoriSystemKeySeach() {
        const categoriesKeySearch = await this.categoryService.getCategorySystemKeySearch();
        return categoriesKeySearch;
    }
    async getCategoriSystem() {
        const categories = await this.categoryService.getAllCategorySystem();
        return categories;
    }
};
__decorate([
    (0, common_1.Get)("key-search"),
    (0, swagger_1.ApiHeader)({
        name: 'x-api-key-system',
        description: 'Key get api',
    }),
    (0, common_1.UseGuards)((0, role_guard_1.default)(role_enum_1.Role_Get_Api.SYSTEM)),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Get Susscess full' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden' }),
    (0, swagger_1.ApiOkResponse)({ status: 200, type: categoty_system_schema_1.CategorySystemKeySearchSchema }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategorySystemController.prototype, "getCategoriSystemKeySeach", null);
__decorate([
    (0, common_1.Get)(""),
    (0, swagger_1.ApiHeader)({
        name: 'x-api-key-system',
        description: 'Key get api',
    }),
    (0, common_1.UseGuards)((0, role_guard_1.default)(role_enum_1.Role_Get_Api.SYSTEM)),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Get Susscess full' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden' }),
    (0, swagger_1.ApiOkResponse)({ status: 200, type: categoty_system_schema_1.CategorySystemSchema }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategorySystemController.prototype, "getCategoriSystem", null);
CategorySystemController = __decorate([
    (0, common_1.Controller)('category-system'),
    (0, swagger_1.ApiTags)('category-system'),
    __metadata("design:paramtypes", [category_system_service_1.CategorySystemService])
], CategorySystemController);
exports.CategorySystemController = CategorySystemController;
//# sourceMappingURL=category-system.controller.js.map