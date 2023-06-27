import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Chofer } from "./Chofer";

export enum CamionesTypes {
        LIL = 'pequeño',
        MEDIUM = 'mediano',
        BIG = 'grande'
}

@Entity()
export class Flete extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number = 0;

    @Column()
    origen: string = '';

    @Column()
    destino: string = '';

    @Column()
    carga: string = '';

    @Column()
    foto: string = '';

    @Column()
    ayudante: number= 0;

    @Column({
        type: "enum",
        enum: CamionesTypes,
        default: CamionesTypes.LIL
    })
    camion: CamionesTypes = CamionesTypes.LIL; 

    @Column({
        type: "numeric"
    })
    oferta: number = 0;

    @ManyToOne(
        () => Chofer,
        { nullable: true }
    )
    @JoinColumn({
        name: 'chofer_id'
    })
    chofer!: Chofer;

}