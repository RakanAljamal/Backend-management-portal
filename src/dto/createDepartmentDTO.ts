import { IsString, Length } from "class-validator";
import { CreateEmployeeDTO } from "./createEmployeeDTO";

export class CreateDepartmentDTO {
    name: string;

    userId: string;
}
