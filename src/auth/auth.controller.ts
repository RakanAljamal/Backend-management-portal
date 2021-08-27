import { Controller, Post, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CurrentUser } from "./current-user";
import { JwtService } from "@nestjs/jwt";
import { JWT, LocalAuth } from "./auth-util";
import { User } from "../user/user.entity";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService, private readonly jwtService: JwtService) {
    }

    @Post('/login')
    @UseGuards(LocalAuth)
    async login(@CurrentUser() user: User) {
        return {
            token: this.authService.generate(user)
        }
    }
}

