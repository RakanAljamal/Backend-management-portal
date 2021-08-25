import { Body, Controller, Param, Post, Patch, UseGuards } from "@nestjs/common";
import { CreateEmployeeDTO, UpdateEmployeeDto } from "../dto/createEmployeeDTO";
import { UserService } from "./user.service";
import { CurrentUser } from "../auth/current-user";
import { JWT } from "../auth/auth-util";

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {
    }


    @Post('/register')
    async createEmployee(@Body() employee: CreateEmployeeDTO) {
        return await this.userService.createEmployee(employee);
    }

    @Patch('/update')
    @UseGuards(JWT)
    async update(@Body() employee: UpdateEmployeeDto, @CurrentUser() currentUser) {
        return await this.userService.updateEmployee(employee, currentUser);
    }


}
