import { Controller, Get } from "@nestjs/common";
import exp from "constants";


@Controller('employee')
export class EmployeeController {

    constructor() {
    }

    @Get()
    async welcome() {
        return "This is an employee page"
    }

}
