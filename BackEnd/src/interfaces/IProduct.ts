import { IPhoto } from './IPhoto'

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
  created_at?: Date;
  updated_at?: Date;
  
}

export interface IFullProduct extends IProduct {
  photos: IPhoto[];
}
