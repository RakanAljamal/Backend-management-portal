import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { Department } from "../department/department.entity";
import { Project } from "../project/project.entity";
import { Repository, In } from 'typeorm';
import { CreateEmployeeDTO, UpdateEmployeeAdmin, UpdateEmployeeDto } from "../dto/createEmployeeDTO";
import * as bcrypt from 'bcrypt';
import { mapUser, validatePassword } from "./user-util";


@Injectable()
export class UserService {
    constructor(@InjectRepository(User) readonly userRepository: Repository<User>,
                @InjectRepository(Department) readonly departmentRepo: Repository<Department>,
                @InjectRepository(Project) readonly projectRepo: Repository<Project>) {
    }

    async createEmployee(employee: CreateEmployeeDTO) {
        const {firstName, lastName, password, email} = employee;

        const user = await this.userRepository.findOne({
            where: {email}
        })

        if (user) {
            throw new BadRequestException("Email already exist");
        }

        if (employee.password !== employee.retypedPassword) {
            throw new BadRequestException('Passwords doesnt match');
        }


        const department = await this.departmentRepo.findOne(employee.departmentId || -1)

        if (employee.departmentId && !department) {
            throw new NotFoundException(`department: ${employee.departmentId} not found`);
        }

        const projects = await this.projectRepo.find({
            where: {
                id: In(employee.projectsId || [])
            }
        })

        if (employee.projectsId && projects.length < 1) {
            throw new NotFoundException(`project: [${employee.projectsId}] not found`)
        }

        return mapUser(await this.userRepository.save({
            firstName,
            lastName,
            password: await bcrypt.hash(password, 10),
            email,
            department,
            projects,
            createdAt: new Date().toISOString()
        }));
    }

    async updateEmployee(employee: UpdateEmployeeDto, currentUser: any) {
        const user = await this.userRepository.findOne({
            where: {email: currentUser.email}
        })

        if (!user) {
            throw new NotFoundException("User not found");
        }

        if (employee.password && employee.password !== employee.retypedPassword) {
            throw new BadRequestException('Passwords doesnt match');
        }

        if (employee.oldPassword && await validatePassword(employee.oldPassword, user.password)) {
            throw new BadRequestException('Your old password is wrong please try again');
        }

        const department = await this.departmentRepo.findOne(employee.departmentId || -1)

        if (employee.departmentId && !department) {
            throw new NotFoundException(`department: ${employee.departmentId} not found`);
        }

        const projects = await this.projectRepo.find({
            where: {
                id: In(employee.projectsId || [])
            }
        })

        if (employee.projectsId && projects.length < 1) {
            throw new NotFoundException(`project: [${employee.projectsId}] not found`)
        }

        return mapUser(await this.userRepository.save({
            ...user,
            ...employee,
            password: employee.password ? await bcrypt.hash(employee.password, 10) : user.password,
            department,
            projects,
            updatedAt: new Date().toISOString()
        }));
    }

    async updateEmployeeWithAdmin(employee: UpdateEmployeeAdmin, id: string) {
        const user = await this.userRepository.findOne(id || -1);

        if (!user) {
            throw  new NotFoundException("User not found");
        }

        if (employee.oldPassword && await validatePassword(employee.oldPassword, user.password)) {
            throw new BadRequestException('Your old password is wrong please try again');
        }

        const department = await this.departmentRepo.findOne(employee.departmentId || -1)

        if (employee.departmentId && !department) {
            throw new NotFoundException(`department: ${employee.departmentId} not found`);
        }

        const projects = await this.projectRepo.find({
            where: {
                id: In(employee.projectsId || [])
            }
        })

        if (employee.projectsId && projects.length < 1) {
            throw new NotFoundException(`project: [${employee.projectsId}] not found`)
        }

        return mapUser(await this.userRepository.save({
            ...user,
            ...employee,
            password: employee.password ? await bcrypt.hash(employee.password, 10) : user.password,
            department,
            projects,
            updatedAt: new Date().toISOString()
        }));
    }
}
