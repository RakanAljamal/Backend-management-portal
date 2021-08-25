import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { mapUser } from "../user/user-util";

export const CurrentUser = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest();
    const user = req.user;
    if (!user)
        return null;

    return mapUser(user);
})
