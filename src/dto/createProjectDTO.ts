import { IsArray, IsString, Length } from "class-validator";
import { CreateEmployeeDTO } from "./createEmployeeDTO";

export class CreateProjectDTO {
    @IsString()
    @Length(5, 255, {message: 'The name length is wrong'})
    name: string;

    usersId: string[];
}
