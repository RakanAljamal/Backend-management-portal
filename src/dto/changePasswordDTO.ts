import { Length } from "class-validator";

export class ChangePasswordDTO {
    oldPassword: string;
    @Length(8)
    password: string;

    retypedPassword: string;
}
