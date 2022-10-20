export interface IProduct {
  id: number;
  name: string;
  price: string;
  description?: string;
  category?: number;
  created_at?: Date;
  updated_at?: Date;
}
