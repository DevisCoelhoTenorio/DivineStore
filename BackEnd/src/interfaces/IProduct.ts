import { IPhoto } from './IPhoto';

export interface ISimpleProduct {
  id: number;
  name: string;
  price: string;
  category?: number;
}
export interface IProduct extends ISimpleProduct {
  id: number;
  name: string;
  price: string;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;

}

export interface IFullProduct extends IProduct {
  photos: IPhoto[];
}
