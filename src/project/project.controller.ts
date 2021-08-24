import { Controller, Get } from "@nestjs/common";


@Controller('project')
export class ProjectController {

    constructor() {
    }

    @Get()
    async welcome() {
        return "This is an Project page"
    }

}
