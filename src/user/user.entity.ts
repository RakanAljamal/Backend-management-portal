import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinColumn, JoinTable } from "typeorm";
import { Department } from "../department/department.entity";
import { Project } from "../project/project.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    email: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @ManyToOne(() => Department, (department) => department.users, {
        nullable: true
    })
    @JoinColumn()
    department: Department;

    @ManyToMany(() => Project, (project) => project.users)
    @JoinTable()
    projects: Project[];

    @Column()
    createdAt: Date;

    @Column()
    updatedAt: Date;
}
