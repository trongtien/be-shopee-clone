"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategorySystemService = void 0;
const common_1 = require("@nestjs/common");
let CategorySystemService = class CategorySystemService {
    constructor() {
        this.CATEGORY_SYSTEM_HARD = [
            { id: "1", uuid: "1", name: "Áo Khoác" },
            { id: "2", uuid: "2", name: "Dép" },
            { id: "3", uuid: "3", name: "Túi Xách Nữ" },
            { id: "4", uuid: "4", name: "Váy" },
            { id: "5", uuid: "5", name: "Balo" },
            { id: "6", uuid: "6", name: "Quần Jean Nam" },
            { id: "7", uuid: "7", name: "Ốp iPhone" },
            { id: "8", uuid: "8", name: "Dép Nam" },
        ];
    }
    getCategorySystem() {
        return new Promise(resolve => {
            resolve(this.CATEGORY_SYSTEM_HARD);
        });
    }
};
CategorySystemService = __decorate([
    (0, common_1.Injectable)()
], CategorySystemService);
exports.CategorySystemService = CategorySystemService;
//# sourceMappingURL=category-system.service.js.map