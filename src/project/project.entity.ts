import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable } from "typeorm";
import { User } from "../user/user.entity";

@Entity()
export class Project {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;


    @ManyToMany(() => User, (user) => user.projects)
    users: User[];

    @Column()
    createdAt: Date;

    @Column()
    updatedAt: Date;
}
