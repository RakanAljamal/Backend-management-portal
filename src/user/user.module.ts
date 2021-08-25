import { Module } from '@nestjs/common';
import { UserController } from "./user.controller";
import { User } from "./user.entity";
import { TypeOrmModule } from '@nestjs/typeorm';
import { Department } from "../department/department.entity";
import { JwtStrategy } from "../auth/jwt.strategy";
import { Project } from "../project/project.entity";
import { UserService } from "./user.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([User, Department,Project]),
    ],
    controllers: [UserController],
    providers: [JwtStrategy,UserService]
})
export class UserModule {
}
