import { Module } from '@nestjs/common';
import { DepartmentController } from "./Department.controller";
import { Department } from "./department.entity";
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forFeature([Department]),
    ],
    controllers: [DepartmentController]
})
export class DepartmentModule {}
