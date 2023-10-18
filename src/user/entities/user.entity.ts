import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    email: string

    @Column()
    password: string

    @CreateDateColumn()
    createdAT: Date

    @CreateDateColumn()
    updatedAt: Date
}
