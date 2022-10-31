export interface ISimplePhoto {
  id?: number;
  img: string;
  thumbnail?: boolean;
}

export interface IPhoto extends ISimplePhoto {
  productId: number;
}
