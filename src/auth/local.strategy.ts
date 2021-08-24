import { Injectable, Logger, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { InjectRepository } from "@nestjs/typeorm";
import { Strategy } from "passport-local";
import { Repository } from "typeorm";
import * as bcrypt from "bcrypt";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    private readonly logger = new Logger(LocalStrategy.name);

    constructor(
        // @InjectRepository(User)
        // private readonly userRepository: Repository<User>
    ) {
        super();
    }

    public async validate(
        username: string, pass: string
    ): Promise<any> {
        /*    const user = await this.userRepository.findOne({
                where: {username}
            });

            if (!user) {
                this.logger.debug(`User ${username} not found!`);
                throw new UnauthorizedException();
            }

            if (!(await bcrypt.compare(pass, user.password))) {
                this.logger.debug(`Invalid credentials for user ${username}`);
                throw new UnauthorizedException();
            }*/

        return {
            id: 1,
            name: "Rakan",
            password: "Very secret"
        };
    }
}
