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
exports.ReponseRepositoy = exports.QueryBaseDTO = void 0;
const openapi = require("@nestjs/swagger");
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
class QueryBaseDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { page: { required: true, type: () => Number }, limit: { required: true, type: () => Number } };
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { page: { required: true, type: () => Number }, limit: { required: true, type: () => Number } };
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The page of list',
        minimum: 1,
        default: 1,
    }),
    __metadata("design:type", Number)
], QueryBaseDTO.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The limit of list',
        minimum: 10,
        default: 20,
    }),
    __metadata("design:type", Number)
], QueryBaseDTO.prototype, "limit", void 0);
exports.QueryBaseDTO = QueryBaseDTO;
class ReponseRepositoy {
    static _OPENAPI_METADATA_FACTORY() {
        return { status: { required: true, type: () => Boolean }, error: { required: true, type: () => String }, data: { required: true } };
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { status: { required: true, type: () => Boolean }, error: { required: true, type: () => String }, data: { required: true } };
    }
}
exports.ReponseRepositoy = ReponseRepositoy;
//# sourceMappingURL=query-base.dto.js.map