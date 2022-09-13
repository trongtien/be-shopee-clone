"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./libs/core/app/app.module");
const cors_middleware_1 = require("./config/cors.middleware");
const swagger_2 = require("./config/swagger");
const BaseHttpException_1 = require("./libs/core/BaseHttpException");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        cors: cors_middleware_1.CorsMiddlewareConfig,
    });
    const document = swagger_1.SwaggerModule.createDocument(app, swagger_2.swaggerConfig);
    swagger_1.SwaggerModule.setup('api', app, document);
    app.useGlobalFilters(new BaseHttpException_1.BaseHttpException());
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map