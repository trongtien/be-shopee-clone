"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProductSystemDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const create_product_system_dto_1 = require("./create-product-system.dto");
class UpdateProductSystemDto extends (0, swagger_1.PartialType)(create_product_system_dto_1.CreateProductSystemDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateProductSystemDto = UpdateProductSystemDto;
//# sourceMappingURL=update-product-system.dto.js.map