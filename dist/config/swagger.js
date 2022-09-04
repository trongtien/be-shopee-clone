"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerConfig = void 0;
const swagger_1 = require("@nestjs/swagger");
exports.swaggerConfig = new swagger_1.DocumentBuilder()
    .setTitle('Example')
    .setDescription('API description')
    .setVersion('1.0')
    .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' })
    .build();
//# sourceMappingURL=swagger.js.map