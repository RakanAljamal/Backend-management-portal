import { Controller, Get } from "@nestjs/common";


@Controller('department')
export class DepartmentController {

    constructor() {
    }

    @Get()
    async welcome() {
        return "This is an Department page"
    }

}
