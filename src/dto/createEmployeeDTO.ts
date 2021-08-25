import { IsString, Length, IsEmail } from "class-validator";
import { OmitType, PartialType } from "@nestjs/mapped-types";

export class CreateEmployeeDTO {
    @IsString()
    @Length(5, 255, {message: 'The name length is wrong'})
    firstName: string;

    @IsString()
    @Length(5, 255, {message: 'The name length is wrong'})
    lastName: string;

    @Length(8)
    password: string;

    retypedPassword: string;

    @IsEmail()
    email: string;

    projectsId: string[];


    departmentId: string;

}

export class UpdateEmployeeDto extends PartialType(OmitType(CreateEmployeeDTO, ['email'] as const)) {
    oldPassword: string;
}

export class UpdateEmployeeAdmin extends PartialType(OmitType(CreateEmployeeDTO, ['retypedPassword'] as const)) {
    oldPassword: string;
}
