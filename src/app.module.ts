import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from "@nestjs/config";
import ormConfig from './config/orm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeModule } from "./employee/employee.module";
import { AuthModule } from "./auth/auth.module";


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
        EmployeeModule,
        AuthModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}