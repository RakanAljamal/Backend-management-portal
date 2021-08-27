import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { CreateEmployeeDTO, UpdateEmployeeAdmin, UpdateEmployeeDto } from "../dto/createEmployeeDTO";
import { UserService } from "./user.service";
import { CurrentUser } from "../auth/current-user";
import { JWT } from "../auth/auth-util";
import { Roles } from "../auth/roles.decorator";
import { Role } from "./role";
import { mapUser } from "./user-util";
import { ChangePasswordDTO } from "../dto/changePasswordDTO";

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {
    }

    @Post('/register')
    @Roles(Role.Admin, Role.Manager)
    async createEmployee(@Body() employee: CreateEmployeeDTO) {
        return await this.userService.createEmployee(employee);
    }

    @Post('/password')
    @UseGuards(JWT)
    async changePassword(@Body() passwordPayload: ChangePasswordDTO,@CurrentUser() user) {
        return await this.userService.changePassword(passwordPayload,user);
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

    @Get()
    @Roles(Role.Admin)
    async findAll(){
        return this.userService.findAll();
    }
    @Get('/me')
    @UseGuards(JWT)
    async myInfo(@CurrentUser() user){
        return user;
    }

    @Delete('/delete/:id')
    @Roles(Role.Admin)
    async deleteUser(@Param() id){
        return await this.userService.delete(id)
    }
}
