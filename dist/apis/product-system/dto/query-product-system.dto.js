"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryProductSystemDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const query_base_dto_1 = require("../../../libs/dto/query-base.dto");
class QueryProductSystemDto extends (0, swagger_1.PartialType)(query_base_dto_1.QueryBaseDTO) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.QueryProductSystemDto = QueryProductSystemDto;
//# sourceMappingURL=query-product-system.dto.js.map