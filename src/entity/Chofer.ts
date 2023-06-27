import { Entity, Column, OneToMany } from "typeorm";
import { User } from "./User";
import { Flete } from "./Flete";

@Entity('chofer')
export class Chofer extends User {

    @Column()
    camion: string = '';

    @OneToMany(
        () => Flete,
        flete => flete.chofer
    )
    fletes! : Flete[];

}