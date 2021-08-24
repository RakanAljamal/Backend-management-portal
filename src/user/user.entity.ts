import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinColumn, JoinTable } from "typeorm";
import { Department } from "../department/department.entity";
import { Project } from "../project/project.entity";
import { Role } from "./role";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    password: string;

    @Column({unique:true})
    email: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column('enum', {
        enum: Role,
        default: Role.Employee
    })
    role: Role;

    @ManyToOne(() => Department, (department) => department.users, {
        nullable: true
    })
    @JoinColumn()
    department: Department;

    @ManyToMany(() => Project, (project) => project.users, {nullable: true})
    @JoinTable()
    projects: Project[];

    @Column()
    createdAt: Date;

    @Column({
        default: null
    })
    updatedAt: Date;
}
