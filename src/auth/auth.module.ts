import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { LocalStrategy } from "./local.strategy";
import { AuthController } from "./auth.controller";
import { JwtModule } from "@nestjs/jwt";
import { AuthService } from "./auth.service";
import { JwtStrategy } from "./jwt.strategy";
import { User } from "../user/user.entity";
import { RolesGuard } from "./roles.guard";
import { APP_GUARD } from "@nestjs/core";
import { Roles } from "./roles.decorator";


@Module({
    imports: [TypeOrmModule.forFeature([User]),
        JwtModule.registerAsync({
            useFactory: () => ({
                secret: process.env.JWT_SECRET,
                signOptions: {
                    expiresIn: '60m'
                }
            })
        })
    ],
    providers: [LocalStrategy, AuthService, JwtStrategy, {
        provide: APP_GUARD,
        useClass: RolesGuard
    }],
    controllers: [AuthController]
})
export class AuthModule {
}
