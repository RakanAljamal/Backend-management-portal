import { Body, Controller, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { CreateEmployeeDTO, UpdateEmployeeAdmin, UpdateEmployeeDto } from "../dto/createEmployeeDTO";
import { UserService } from "./user.service";
import { CurrentUser } from "../auth/current-user";
import { JWT } from "../auth/auth-util";
import { Roles } from "../auth/roles.decorator";
import { Role } from "./role";

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {
    }

    @Post('/register')
    @Roles(Role.Admin, Role.Manager)
    async createEmployee(@Body() employee: CreateEmployeeDTO) {
        return await this.userService.createEmployee(employee);
    }

    @Patch('/update')
    @UseGuards(JWT)
    async update(@Body() employee: UpdateEmployeeDto, @CurrentUser() currentUser) {
        return await this.userService.updateEmployee(employee, currentUser);
    }

    @Patch('/update/:id')
    @Roles(Role.Admin)
    async updateEmployee(@Body() employee: UpdateEmployeeAdmin,@Param() id: string) {
        return this.userService.updateEmployeeWithAdmin(employee, id);
    }
}
