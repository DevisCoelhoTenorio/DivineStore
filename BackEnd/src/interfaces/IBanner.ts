export interface IBannerCreate {
  name: string;
  img: string;
}

export interface IBanner extends IBannerCreate {
  id: number;
  updatedAt: Date;
  createdAt: Date;
}
