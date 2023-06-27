import express from 'express';
import { FleteController } from './FlereController';

const fleteRouter = express.Router();
const fleteController = new FleteController();

fleteRouter.get('/', fleteController.all);
fleteRouter.get('/:id', fleteController.one);
fleteRouter.post('/newFlete', fleteController.newOne);

export default fleteRouter