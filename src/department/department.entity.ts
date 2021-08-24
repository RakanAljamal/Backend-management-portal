import { Column, Entity, PrimaryGeneratedColumn, OneToMany, JoinColumn } from "typeorm";
import { User } from "../user/user.entity";

@Entity()
export class Department {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => User, (user) => user.department)
    @JoinColumn()
    users: User[];


    @Column()
    createdAt: Date;

    @Column()
    updatedAt: Date;
}
