import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from "@nestjs/config";
import ormConfig from './config/orm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from "./user/user.module";
import { AuthModule } from "./auth/auth.module";
import { ProjectModule } from "./project/project.module";
import { DepartmentModule } from "./department/department.module";


@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [ormConfig],
            expandVariables: true
        }),
        TypeOrmModule.forRootAsync({
            useFactory: ormConfig
        }),
        UserModule,
        ProjectModule,
        DepartmentModule,
        AuthModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
