import { Response, Request } from 'express';
import { UserService } from '../services';
import { ICustomRequest } from '../interfaces';
import 'express-async-errors';

export default class UserController {
  constructor(private service: UserService) {}

  public create = async (req: ICustomRequest, res: Response) : Promise<void> => {
    const result = await this.service.create(req.body);
    res.status(201).json(result);
  };

  public findAll = async (_req: ICustomRequest, res: Response): Promise<void> => {
    const result = await this.service.findAll();
    res.status(200).json(result);
  };

  public update = async (req: Request, res: Response): Promise<void> => {
    const { body, params: { userId } } = req;
    const response = await this.service.update(Number(userId), body);
    res.status(201).json({ message: response });
  };

  public delete = async (req: Request, res: Response): Promise<void> => {
    const { photoId } = req.params;
    await this.service.delete(Number(photoId));
    res.status(200).json({ message: 'Usuário deletado com sucesso' });
  };
}
