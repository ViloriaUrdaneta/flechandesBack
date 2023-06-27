import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity('user')
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number = 0;
    
    @Column()
    name: string = "";

    @Column({
        unique: true
    })
    email: string = "";

}