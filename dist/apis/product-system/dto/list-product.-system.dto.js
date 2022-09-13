"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListProductSystemDTO = void 0;
const openapi = require("@nestjs/swagger");
class ListProductSystemDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, image: { required: true, type: () => String }, name: { required: true, type: () => String }, price: { required: true, type: () => Number }, price_discount: { required: true, type: () => Number }, is_discount: { required: true, type: () => Number }, sold: { required: true, type: () => String }, address: { required: true, type: () => String } };
    }
}
exports.ListProductSystemDTO = ListProductSystemDTO;
//# sourceMappingURL=list-product.-system.dto.js.map