import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { User } from "../user/user.entity";
import { mapUser } from "../user/user-util";

// import { User } from "./user.entity";

@Injectable()
export class AuthService {

    constructor(private readonly jwtService: JwtService) {
    }

    public generate(user: User) {
        return this.jwtService.sign({
            sub: user.id,
            user: mapUser(user)
        })
    }


}
