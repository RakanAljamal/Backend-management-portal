import { Controller, Get, Post, Request, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { AuthService } from "./auth.service";
import { CurrentUser } from "./current-user";
import { JwtService } from "@nestjs/jwt";
import { Auth, JWT } from "./auth-util";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService, private readonly jwtService: JwtService) {
    }

    @Post('login')
    @UseGuards(Auth)
    async login(@Request() request) {
        console.log(request)
        return {
            userId: request.user.id,
        }
    }


    @Get()
    @UseGuards(JWT)
    async secretFunc(@CurrentUser() user) {
        return user;
    }

    @Get('/token')
    async generate() {
        return this.jwtService.sign({
            sub: 1,
            username: "Rakan"
        })
    }
}

