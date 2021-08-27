import { IsArray, IsString, Length } from "class-validator";
import { CreateEmployeeDTO } from "./createEmployeeDTO";

export class CreateProjectDTO {
    name: string;

    usersId: string[];
}
