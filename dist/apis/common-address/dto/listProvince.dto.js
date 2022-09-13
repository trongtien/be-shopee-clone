"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListProviceDTO = void 0;
const openapi = require("@nestjs/swagger");
const openapi = require("@nestjs/swagger");
class ListProviceDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, uuid: { required: true, type: () => String }, provinceId: { required: true, type: () => Number }, name: { required: true, type: () => String } };
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, uuid: { required: true, type: () => String }, provinceId: { required: true, type: () => Number }, name: { required: true, type: () => String } };
    }
}
exports.ListProviceDTO = ListProviceDTO;
//# sourceMappingURL=listProvince.dto.js.map