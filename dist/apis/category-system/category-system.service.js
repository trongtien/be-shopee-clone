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
exports.CategorySystemService = void 0;
const common_1 = require("@nestjs/common");
const PrismaServiceBase_1 = require("../../libs/core/PrismaServiceBase");
let CategorySystemService = class CategorySystemService {
    constructor(prisma) {
        this.prisma = prisma;
        this.CATEGORY_SYSTEM_SEARCH_HARD = [
            { id: "1", uuid: "1", name: "Áo Khoác" },
            { id: "2", uuid: "2", name: "Dép" },
            { id: "3", uuid: "3", name: "Túi Xách Nữ" },
            { id: "4", uuid: "4", name: "Váy" },
            { id: "5", uuid: "5", name: "Balo" },
            { id: "6", uuid: "6", name: "Quần Jean Nam" },
            { id: "7", uuid: "7", name: "Ốp iPhone" },
            { id: "8", uuid: "8", name: "Dép Nam" },
        ];
        this.CATEGORY_SYSTEM_HARD = [
            { id: 1, uuid: "11035567", name: "Thời Trang Nam", image_reasize: "https://cf.shopee.vn/file/687f3967b7c2fe6a134a2c11894eea4b_tn", image: "https://cf.shopee.vn/file/687f3967b7c2fe6a134a2c11894eea4b_tn", path: "/Thời-Trang-Nam-cat.11035567" },
            { id: 2, uuid: "11035639", name: "Thời Trang Nữ", image_reasize: "https://cf.shopee.vn/file/75ea42f9eca124e9cb3cde744c060e4d_tn", image: "https://cf.shopee.vn/file/75ea42f9eca124e9cb3cde744c060e4d_tn", path: "/Thời-Trang-Nữ-cat.11035639" },
            { id: 3, uuid: "11036194", name: "Mẹ & Bé", image_reasize: "https://cf.shopee.vn/file/099edde1ab31df35bc255912bab54a5e_tn", image: "https://cf.shopee.vn/file/099edde1ab31df35bc255912bab54a5e_tn", path: "/Mẹ-Bé-cat.11036194" },
            { id: 4, uuid: "11036030", name: "Điện Thoại & Phụ Kiện", image_reasize: "https://cf.shopee.vn/file/31234a27876fb89cd522d7e3db1ba5ca_tn", image: "https://cf.shopee.vn/file/31234a27876fb89cd522d7e3db1ba5ca_tn", path: "/Điện-Thoại-Phụ-Kiện-cat.11036030" },
            { id: 5, uuid: "11036132", name: "Thiết Bị Điện Tử", image_reasize: "https://cf.shopee.vn/file/978b9e4cb61c611aaaf58664fae133c5_tn", image: "https://cf.shopee.vn/file/978b9e4cb61c611aaaf58664fae133c5_tn", path: "/Thiết-Bị-Điện-Tử-cat.11036132" },
            { id: 6, uuid: "11036670", name: "Nhà Cửa & Đời Sống", image_reasize: "https://cf.shopee.vn/file/24b194a695ea59d384768b7b471d563f_tn", image: "https://cf.shopee.vn/file/24b194a695ea59d384768b7b471d563f_tn", path: "/Nhà-Cửa-Đời-Sống-cat.11036670" },
            { id: 7, uuid: "11035954", name: "Máy Tính & Laptop", image_reasize: "https://cf.shopee.vn/file/c3f3edfaa9f6dafc4825b77d8449999d_tn", image: "https://cf.shopee.vn/file/c3f3edfaa9f6dafc4825b77d8449999d_tn", path: "/Máy-Tính-Laptop-cat.11035954" },
            { id: 8, uuid: "11036279", name: "Sắc Đẹp", image_reasize: "https://cf.shopee.vn/file/ef1f336ecc6f97b790d5aae9916dcb72_tn", image: "https://cf.shopee.vn/file/ef1f336ecc6f97b790d5aae9916dcb72_tn", path: "/Sắc-Đẹp-cat.11036279" },
        ];
    }
    getCategorySystemKeySearch() {
        return new Promise(resolve => {
            resolve(this.CATEGORY_SYSTEM_SEARCH_HARD);
        });
    }
    getAllCategorySystem() {
        return new Promise(resolve => {
            resolve(this.CATEGORY_SYSTEM_HARD);
        });
    }
};
CategorySystemService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [PrismaServiceBase_1.PrismaServiceBase])
], CategorySystemService);
exports.CategorySystemService = CategorySystemService;
//# sourceMappingURL=category-system.service.js.map