"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const RoleGuard = (role) => {
    class RoleGuardMixin {
        canActivate(context) {
            const request = context.switchToHttp().getRequest();
            const accessRoleSystem = request.headers['x-api-key-system'];
            const userRequest = request.user;
            if (!userRequest && role === accessRoleSystem) {
                return true;
            }
            return false;
        }
    }
    return (0, common_1.mixin)(RoleGuardMixin);
};
exports.default = RoleGuard;
//# sourceMappingURL=role-guard.js.map