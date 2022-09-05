import { Role_Get_Api } from './../../enums/role.enum';
import { CanActivate, Type } from '@nestjs/common';
declare const RoleGuard: (role: Role_Get_Api) => Type<CanActivate>;
export default RoleGuard;
