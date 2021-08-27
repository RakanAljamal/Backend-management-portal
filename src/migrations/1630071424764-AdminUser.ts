import { MigrationInterface, QueryRunner } from "typeorm";

export class AdminUser1630071424764 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`insert into portal.user(firstName, lastName, role, email, password, createdAt)
                            values ('PWC', 'ADMIN', 'Admin', 'pwc@email.com', '$2a$12$NV5ZhGBGo6jfjZdqUQvMweYfvrBwKjGHdyVqIvqiVH3yMWoTBS2vy','2021-08-27 00:57:31')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
