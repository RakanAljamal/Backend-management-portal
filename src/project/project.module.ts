import { Module } from '@nestjs/common';
import { ProjectController } from "./Project.controller";
import { Project } from "./project.entity";
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forFeature([Project]),
    ],
    controllers: [ProjectController]
})
export class ProjectModule {}
