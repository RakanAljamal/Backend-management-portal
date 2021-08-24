import { IsString, Length } from "class-validator";
import { CreateEmployeeDTO } from "./createEmployeeDTO";

export class CreateDepartmentDTO {
    @IsString()
    @Length(5, 255, {message: 'The name length is wrong'})
    name: string;

    users: CreateEmployeeDTO[];
}
