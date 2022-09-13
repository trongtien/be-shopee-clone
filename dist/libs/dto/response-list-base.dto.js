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
exports.PageMetaDto = void 0;
const openapi = require("@nestjs/swagger");
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
class PageMetaDto {
    constructor({ page, limit }) {
        this.page = Number(page);
        this.limit = Number(limit);
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { items: { required: true }, page: { required: true, type: () => Number }, limit: { required: true, type: () => Number } };
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { items: { required: true }, page: { required: true, type: () => Number }, limit: { required: true, type: () => Number } };
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({ isArray: true }),
    __metadata("design:type", Array)
], PageMetaDto.prototype, "items", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], PageMetaDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], PageMetaDto.prototype, "limit", void 0);
exports.PageMetaDto = PageMetaDto;
//# sourceMappingURL=response-list-base.dto.js.map