import JWT, { Secret, SignOptions } from 'jsonwebtoken';
import CustomError from '../utils/CustomError';

import { IUser } from '../interfaces/IUser';

const jwtConfig = {
  expiresIn: '20h',
  algorithm: 'HS256',
};

const SECRET = process.env.JWT_SECRET;

export const generateToken = (payload: Omit<IUser, 'password'>) => JWT
  .sign(payload, SECRET as Secret, jwtConfig as SignOptions);

export const authTokenValidation = (token: string) => {
  if (!token) {
    throw new CustomError('Token not found', 'not.token');
  }
  try {
    const verification = JWT.verify(token, SECRET as Secret);
    return verification;
  } catch {
    throw new CustomError('Invalid token', 'not.token');
  }
};