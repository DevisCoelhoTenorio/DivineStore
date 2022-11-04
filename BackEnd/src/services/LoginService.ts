import CustomError from '../utils/CustomError';
import UserService from './UserService';
import { ILoginUser, IUser, IResponseLogin } from '../interfaces';
import { generateToken, authTokenValidation } from '../validations/auth';

export default class LoginService {
  private service = new UserService();

  private checkUser = async (user: ILoginUser): Promise<IUser> => {
    const result = await this.service.findAll(user);
    if (result.length !== 1) {
      throw new CustomError('Incorrect email or password', 'not.login');
    }
    return result[0];
  };

  public login = async (user: ILoginUser): Promise<IResponseLogin> => {
    const { id, email, name, admin } = await this.checkUser(user);
    const token = generateToken({ id, email, name, admin })
    return { token, user: {name, email, access: admin}};
  };

  public validade = async (token: string | undefined) => {
    const payload = authTokenValidation(token);
    return payload;
  };
}
