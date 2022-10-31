export interface ILoginUser {
  email: string;
  password?: string;
}

export interface IUser extends ILoginUser {
  id: number;
  name: string;
  admin?: boolean;
}
