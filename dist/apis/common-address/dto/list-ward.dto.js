"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListWardDTO = void 0;
const openapi = require("@nestjs/swagger");
const openapi = require("@nestjs/swagger");
class ListWardDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { uuid: { required: true, type: () => String }, wardId: { required: true, type: () => Number }, districtId: { required: true, type: () => String }, name: { required: true, type: () => String } };
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { uuid: { required: true, type: () => String }, wardId: { required: true, type: () => Number }, districtId: { required: true, type: () => String }, name: { required: true, type: () => String } };
    }
}
exports.ListWardDTO = ListWardDTO;
//# sourceMappingURL=list-ward.dto.js.map