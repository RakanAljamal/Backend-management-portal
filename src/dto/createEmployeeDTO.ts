import { IsString, Length, IsEmail } from "class-validator";
import { OmitType, PartialType } from "@nestjs/mapped-types";
import { Role } from "../user/role";

export class CreateEmployeeDTO {
    firstName: string;

    lastName: string;

    password: string;

    retypedPassword: string;

    email: string;

    projectsId: string[];


    departmentId: string;

}

export class UpdateEmployeeDto extends PartialType(OmitType(CreateEmployeeDTO, ['email'] as const)) {
    oldPassword: string;
}

export class UpdateEmployeeAdmin extends PartialType(OmitType(CreateEmployeeDTO, ['retypedPassword'] as const)) {
    role: Role;
}
