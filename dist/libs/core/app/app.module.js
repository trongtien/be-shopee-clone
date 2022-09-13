"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const helmet_1 = require("helmet");
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const logger_middleware_1 = require("../../../config/logger.middleware");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const category_system_module_1 = require("../../../apis/category-system/category-system.module");
const product_system_module_1 = require("../../../apis/product-system/product-system.module");
const BaseHttpException_1 = require("../BaseHttpException");
const common_address_module_1 = require("../../../apis/common-address/common-address.module");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply((0, helmet_1.default)(), logger_middleware_1.LoggerMiddleware).forRoutes("*");
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            category_system_module_1.CategoriSystemModule,
            product_system_module_1.ProductSystemModule,
            common_address_module_1.CommonAddressModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            {
                provide: core_1.APP_FILTER,
                useClass: BaseHttpException_1.BaseHttpException,
            }
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map