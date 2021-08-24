import { IsDateString, IsString, Length, IsEmail } from "class-validator";
import { CreateProjectDTO } from "./createProjectDTO";

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

    project: string;


    department: string;

}
