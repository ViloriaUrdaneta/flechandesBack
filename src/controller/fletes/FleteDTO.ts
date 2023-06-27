export function asDTO (res: any): {flete: any}{
    const {
        id,
        date,
        origen,
        destino, 
        carga, 
        foto,
        camion,
        ayudante
    } = res;

    const flete = {
        id,
        date,
        origen,
        destino, 
        carga, 
        foto,
        camion,
        ayudante
    }

    return { flete}
}

export function asDTOs(response: any[]): { fletes: any[] } {
    const fletes = response.map((response) => asDTO(response).flete);
    return { fletes };
}









