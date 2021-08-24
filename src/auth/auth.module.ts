import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { LocalStrategy } from "./local.strategy";
import { AuthController } from "./auth.controller";
import { JwtModule } from "@nestjs/jwt";
import { AuthService } from "./auth.service";
import { JwtStrategy } from "./jwt.strategy";


@Module({
    imports: [/*TypeOrmModule.forFeature(AuthEntities),*/
        JwtModule.registerAsync({
            useFactory: () => ({
                secret: process.env.JWT_SECRET,
                signOptions: {
                    expiresIn: '60m'
                }
            })
        })
    ],
    providers: [LocalStrategy, AuthService, JwtStrategy],
    controllers: [AuthController]
})
export class AuthModule {
}