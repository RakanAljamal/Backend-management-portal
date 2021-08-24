import { Controller, Get } from "@nestjs/common";


@Controller('user')
export class UserController {

    constructor() {
    }

    @Get()
    async welcome() {
        return "This is an User page"
    }

}
