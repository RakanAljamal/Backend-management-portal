import { Injectable, Logger, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { InjectRepository } from "@nestjs/typeorm";
import { Strategy } from "passport-local";
import { Repository } from "typeorm";
import * as bcrypt from "bcrypt";
import { User } from "../user/user.entity";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    private readonly logger = new Logger(LocalStrategy.name);

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) {
        super({usernameField: "email", passwordField: "password"})
    }

    public async validate(
        email: string, password: string
    ): Promise<any> {
        console.log(email, password)
        const user = await this.userRepository.findOne({
            where: {email}
        });

        if (!user) {
            this.logger.debug(`User with email: ${email} not found!`);
            throw new UnauthorizedException();
        }

        if (!(await bcrypt.compare(password, user.password))) {
            this.logger.debug(`Invalid credentials for user ${email}`);
            throw new UnauthorizedException();
        }

        const {password: pass, ...result} = user;

        return result;
    }
}
