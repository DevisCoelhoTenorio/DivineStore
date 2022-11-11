import { IPhoto } from './IPhoto';
import { ISize } from './ISize';

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
