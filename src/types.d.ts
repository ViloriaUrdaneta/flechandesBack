export type Camion = 'pequeño'| 'mediano'| 'grande'
export type Ayudante = 0 | 1 | 2 | 3

export interface FleteInterface {
    id: number,
    date: string,
    origen: string,
    destino: string,
    carga: string,
    foto: string,
    camion: Camion,
    ayudante: Ayudante,
}