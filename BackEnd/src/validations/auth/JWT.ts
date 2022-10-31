import { Secret, SignOptions, sign, verify, JwtPayload } from 'jsonwebtoken';
import CustomError from '../../utils/CustomError';
import { IUser } from '../../interfaces/IUser';

const jwtConfig = {
  expiresIn: '20h',
  algorithm: 'HS256',
};

const SECRET = process.env.JWT_SECRET;

export const generateToken = (payload: IUser) =>
  sign(payload, SECRET as Secret, jwtConfig as SignOptions);

export const authTokenValidation = (token: string | undefined) => {
  if (!token) {
    throw new CustomError('Token must be a valid token', 'not.token');
  }
  try {
    const verification = verify(token, SECRET as Secret);
    return verification as JwtPayload;
  } catch {
    throw new CustomError('Token must be a valid token', 'not.token');
  }
};
