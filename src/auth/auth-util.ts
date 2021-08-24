import { AuthGuard } from "@nestjs/passport";

export class LocalAuth extends AuthGuard('local') {
}

export class JWT extends AuthGuard('jwt') {

}
