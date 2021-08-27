import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from "../user/user.entity";
import { Department } from "../department/department.entity";
import { Project } from "../project/project.entity";


export default registerAs(
    'orm.config',
    (): TypeOrmModuleOptions => ({
        type: 'mysql',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: [Department, User, Project],
        migrations: ["dist/migrations/*{.ts,.js}"],
        migrationsTableName: "migrations_typeorm",
        migrationsRun: true,
        synchronize: true
    })
);
