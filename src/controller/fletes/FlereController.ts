import { AppDataSource } from "../../data-source";
import { Request, Response } from "express";
import { Flete } from "../../entity/Flete";
import { asDTO, asDTOs } from "./FleteDTO";

export class FleteController {

    private fleteRepository = AppDataSource.getRepository(Flete);

    public one = async (req: Request, res: Response) => {
        try {
            const id = parseInt(req.params.id, 10);
            const flete = await this.fleteRepository.findOne({where: {id}});
            if(!flete){
                return res
                    .status(404)
                    .json({ messge: 'El flete buscado no se encuentra' })
            };
            const fleteDTO = asDTO(flete);
            return res.status(200).json(fleteDTO);
        } catch (err) {
            return res.status(400).json({
                message: 'Ha ocurrido un error trayento el flete',
                error: err
            });
        }
    }

    public all = async (_req: Request, res: Response) => {
        try {
            const fletes = await this.fleteRepository.find();
            const fleteDTOs = asDTOs(fletes)
            return res.status(200).json(fleteDTOs)
        } catch (err) {
            return res.status(400).json({
                message: 'Ha ocurrido un error trayento los fletes',
                error: err
            });
        }
    }

    public newOne =async (req: Request, res: Response) => {
        try {
            const flete: Flete = req.body;
            const newFlete = await this.fleteRepository.create(flete);
            const savedFlete = await this.fleteRepository.save(newFlete);
            return res.status(200).json({ savedFlete, message: 'Nuevo flete creado exitosamente' })
        } catch (err) {
            return res.status(400).json({
                message: 'Ha ocurrido un error creando el flete',
                error: err
            });
        }
    }


}