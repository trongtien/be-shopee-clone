import { Role_Get_Api } from './../../enums/role.enum';
import { CanActivate, ExecutionContext, mixin, Type } from '@nestjs/common';
 
const RoleGuard = (role: Role_Get_Api): Type<CanActivate> => {
  class RoleGuardMixin implements CanActivate {
    canActivate(context: ExecutionContext) {
      const request = context.switchToHttp().getRequest();
      const accessRoleSystem = request.headers['x-api-key-system'];
      
      const userRequest = request.user;

      if(!userRequest && role === accessRoleSystem){
        return true
      }
 
      // return user?.roles.includes(role);
      return false
    }
  }
 
  return mixin(RoleGuardMixin);
}
 
export default RoleGuard;