import { IPhoto } from './IPhoto';

type category = {
  name: string;
};

export interface ISimpleProduct {
  id: number;
  name: string;
  price: string;
  category: category;
}
export interface IProduct extends ISimpleProduct {
  id: number;
  name: string;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IFullProduct extends IProduct {
  photos: IPhoto[];
}
