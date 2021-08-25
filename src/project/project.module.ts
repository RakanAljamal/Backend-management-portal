import { Module } from '@nestjs/common';
import { ProjectController } from "./Project.controller";
import { Project } from "./project.entity";
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from "../user/user.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([Project,User]),
    ],
    controllers: [ProjectController]
})
export class ProjectModule {}
