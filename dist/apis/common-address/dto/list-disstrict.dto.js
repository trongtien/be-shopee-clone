"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListDistrictDto = void 0;
const openapi = require("@nestjs/swagger");
class ListDistrictDto {
    constructor(partial) {
        Object.assign(this, partial);
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { uuid: { required: true, type: () => String }, districtId: { required: true, type: () => String }, provinceId: { required: true, type: () => String }, name: { required: true, type: () => String } };
    }
}
exports.ListDistrictDto = ListDistrictDto;
//# sourceMappingURL=list-disstrict.dto.js.map