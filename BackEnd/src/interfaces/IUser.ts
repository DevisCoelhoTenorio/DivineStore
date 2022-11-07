export interface ILoginUser {
  email: string;
  password?: string;
  admin: boolean;
}

export interface IUser extends ILoginUser {
  id?: number;
  name: string;
}

export interface IResponseLogin {
  token: string;
  user: {
    name: string;
    admin: boolean;
    email: string;
  };
}
