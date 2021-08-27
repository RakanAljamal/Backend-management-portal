import { Length } from "class-validator";

export class ChangePasswordDTO {
    oldPassword: string;
    password: string;

    retypedPassword: string;
}
