import { Module } from '@nestjs/common';
import { EmployeeController } from "./employee.controller";
import { Employee } from "./employee.entity";
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forFeature([Employee]),
    ],
    controllers: [EmployeeController]
})
export class EmployeeModule {}
