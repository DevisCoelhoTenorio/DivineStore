import { IPhoto } from './IPhoto';

interface ISize {
  id: number;
  name: string;
  quantity: number;
}

export interface ISimpleProduct {
  id?: number;
  name: string;
  price: string;
  category?: number;
}
export interface IProduct extends ISimpleProduct {
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;

}

export interface IFullProduct extends IProduct {
  photos: IPhoto[];
  sizes: ISize[];
}
