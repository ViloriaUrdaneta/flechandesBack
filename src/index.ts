import express, { Request, Response } from 'express';
import cors from 'cors';
import registerRouter from "./routes";
import { AppDataSource } from "./data-source"

const PORT = 3000;

function handleError(err: any, _req: Request, res: Response, _next: any){
    res.status(err.status || 500).send({message: err.message})
}

AppDataSource.initialize()  
    .then( async () => {
        const app = express();
        app.use(cors());
        app.use(express.json());
        app.get('/ping',(_req, res) => {
            console.log('someone pinged here!!');
            res.send('pong')
        });
        registerRouter(app)
        app.use(handleError);
        app.listen(PORT, () => {
            console.log(`server listen on port ${PORT}`)
        })
    })
    .catch(error => console.log(error))







