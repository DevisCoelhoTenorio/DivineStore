import { ClientService } from '../services';
import { Response } from 'express';
import { ICustomRequest } from '../interfaces';
import 'express-async-errors'

export default class ClientController {
    constructor(private service: ClientService) {}

    public findAll = async (req: ICustomRequest, res: Response): Promise<void> => {
        const result = await this.service.findAll(req.body);
        res.status(200).json(result);
    }

    public create = async (req: ICustomRequest, res: Response): Promise<void> => {
        const result = await this.service.create(req.body);
        res.status(201).json(result);
    }
}