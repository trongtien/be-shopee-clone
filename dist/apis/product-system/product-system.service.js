"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSystemService = void 0;
const common_1 = require("@nestjs/common");
let ProductSystemService = class ProductSystemService {
    constructor() {
        this.fakeProductListData = {
            id: 1,
            image: "https://cf.shopee.vn/file/7b52e519b8956724ea2246532e3b5806_tn",
            name: "Áo Khoác Bomber NEW YORK - phong cách nam nữ WILL SHOP chất nỉ bông cotton",
            price: 200000,
            price_discount: 100000,
            is_discount: 1,
            sold: "6.5k",
            address: "TP Hồ Chí Minh"
        };
    }
    findAll(queryFillter) {
        let arrProduct = [];
        let i = 0;
        while (i < queryFillter.limit) {
            arrProduct.push(Object.assign(Object.assign({}, this.fakeProductListData), { id: i + 1 }));
            i++;
        }
        return {
            items: arrProduct,
            limit: queryFillter.limit,
            page: queryFillter.page
        };
    }
};
ProductSystemService = __decorate([
    (0, common_1.Injectable)()
], ProductSystemService);
exports.ProductSystemService = ProductSystemService;
//# sourceMappingURL=product-system.service.js.map