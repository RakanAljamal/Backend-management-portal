import { Module } from '@nestjs/common';
import { UserController } from "./user.controller";
import { User } from "./user.entity";
import { TypeOrmModule } from '@nestjs/typeorm';
import { Department } from "../department/department.entity";
import { JwtStrategy } from "../auth/jwt.strategy";

@Module({
    imports: [
        TypeOrmModule.forFeature([User, Department]),
    ],
    controllers: [UserController],
    providers: [JwtStrategy]
})
export class UserModule {
}
