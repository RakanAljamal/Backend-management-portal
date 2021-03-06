import { Injectable, CanActivate, ExecutionContext, UnauthorizedException, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from "../user/role";
import { ROLES_KEY } from "./roles.decorator";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../user/user.entity";
import { Repository } from 'typeorm';
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class RolesGuard implements CanActivate {

    constructor(@InjectRepository(User) readonly userRepo: Repository<User>,
                private readonly jwtService: JwtService,
                private reflector: Reflector) {
    }

    canActivate(context: ExecutionContext): boolean {
        const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        if (!requiredRoles) {
            return true;
        }
        const req = context.switchToHttp().getRequest();
        const token = req.headers?.authorization;
        if(!token){
            throw new ForbiddenException("User not authorized to perform this action")
        }
        const userToken = <string>token.replace('Bearer ', '');
        try{
            const payload = this.jwtService.verify(userToken);
            return requiredRoles.some((role) => payload?.user.role === role);
        } catch (err){
            throw new ForbiddenException('User not authorized to perform this action');
        }
    }
}
