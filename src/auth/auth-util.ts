import { AuthGuard } from "@nestjs/passport";

export class Auth extends AuthGuard('local') {
}

export class JWT extends AuthGuard('jwt') {

}
