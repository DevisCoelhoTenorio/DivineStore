import { Response, Request } from 'express';
import { ICustomRequest } from '../interfaces';
import { LoginService } from '../services';
import 'express-async-errors';

export default class LoginController {
  constructor(private service: LoginService) {}

  public Login = async (req: ICustomRequest, res: Response): Promise<void> => {
    const response = await this.service.login(req.body);
    res.status(200).json({ token: response });
  };

  public validate = async (req: Request, res: Response): Promise<void> => {
    const { authorization } = req.headers;
    await this.service.validade(authorization);
    res.sendStatus(200);
  };
}
