import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm';
import { Department } from "./department.entity";
import { CreateDepartmentDTO } from "../dto/createDepartmentDTO";
import { Roles } from "../auth/roles.decorator";
import { Role } from "../user/role";
import { JWT } from "../auth/auth-util";


@Controller('department')
export class DepartmentController {

    constructor(@InjectRepository(Department) readonly departmentRepo: Repository<Department>) {
    }

    @Get()
    async welcome() {
        return "This is an Department page"
    }

    @Post()
    @Roles(Role.Admin, Role.Manager)
    async create(@Body() department: CreateDepartmentDTO) {
        return this.departmentRepo.save({
            name: department.name,
            createdAt: new Date().toISOString()
        })
    }
}
