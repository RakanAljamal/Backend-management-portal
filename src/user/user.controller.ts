import { BadRequestException, Body, Controller, Get, NotFoundException, Post, UseGuards } from "@nestjs/common";
import { User } from "./user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm';
import { CreateEmployeeDTO } from "../dto/createEmployeeDTO";
import { Department } from "../department/department.entity";
import * as bcrypt from 'bcrypt';
import { JWT } from "../auth/auth-util";

@Controller('user')
export class UserController {

    constructor(@InjectRepository(User) readonly userRepository: Repository<User>,
                @InjectRepository(Department) readonly departmentRepo: Repository<Department>) {
    }

    @Get()
    @UseGuards(JWT)
    async welcome() {
        return "This is an User page"
    }


    @Post('/register')
    async createEmployee(@Body() employee: CreateEmployeeDTO) {

        const {firstName, lastName, password, email} = employee;

        const user = await this.userRepository.findOne({
            where: {email}
        })

        if (user) {
            throw new BadRequestException("Email already exist");
        }

        const department = await this.departmentRepo.findOne(employee.department)

        if (employee.department && !department) {
            throw new NotFoundException(`department: ${department} not found`);
        }

        if (employee.password !== employee.retypedPassword) {
            throw new BadRequestException('Passwords doesnt match');
        }

        this.userRepository.save({
            firstName,
            lastName,
            password: await bcrypt.hash(password, 10),
            email,
            department,
            createdAt: new Date().toISOString()
        });
    }
}
