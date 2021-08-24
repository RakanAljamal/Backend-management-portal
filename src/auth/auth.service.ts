import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { User } from "../user/user.entity";

// import { User } from "./user.entity";

@Injectable()
export class AuthService {

    constructor(private readonly jwtService: JwtService) {
    }

    public generate(user: User) {
        const {password, ...result} = user;
        return this.jwtService.sign({
            sub: user.id,
            user: result
        })
    }


}
