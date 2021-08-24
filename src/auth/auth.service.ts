import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

// import { User } from "./user.entity";

@Injectable()
export class AuthService {

    constructor(private readonly jwtService: JwtService) {
    }


    public getToken() {
        return this.jwtService.sign({
            sub: 1
        })
    }


}
