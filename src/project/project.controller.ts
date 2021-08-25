import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateProjectDTO } from "../dto/createProjectDTO";
import { Project } from "./project.entity";
import { Repository, In } from 'typeorm';
import { User } from "../user/user.entity";
import { JWT } from "../auth/auth-util";
import { CurrentUser } from "../auth/current-user";
import { Role } from "../user/role";
import { Roles } from "../auth/roles.decorator";

@Controller('project')
export class ProjectController {

    constructor(@InjectRepository(Project) readonly projectRepo: Repository<Project>,
                @InjectRepository(User) readonly userRepo: Repository<User>) {
    }

    @Get()
    async welcome() {
        return "This is an Project page"
    }

    @Post()
    @Roles(Role.Manager, Role.Admin)
    async create(@Body() projectDTO: CreateProjectDTO) {
        const {usersId, ...project} = projectDTO;

        const users = await this.userRepo.find({
            where: {
                id: In(usersId)
            }
        })

        return await this.projectRepo.save({...project, users, createdAt: new Date().toISOString()});
    }

}
