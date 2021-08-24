import { Controller, Get, Post } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";


@Controller('project')
export class ProjectController {

    constructor() {
    }

    @Get()
    async welcome() {
        return "This is an Project page"
    }

}
