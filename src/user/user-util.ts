import { User } from "./user.entity";
import * as bcrypt from 'bcrypt';

export const mapUser = (user: User): Omit<User, "password"> => {
    const {password, ...other} = user;
    return other;
}

export const validatePassword = async (password, otherPassword) => {
    return await bcrypt.compare(password, otherPassword);
}
