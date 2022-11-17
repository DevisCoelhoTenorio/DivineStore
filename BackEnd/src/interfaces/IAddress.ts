export interface IAddress {
  clientId?: number;
  city: string;
  state: string;
  district: string;
  locality: string;
  number?: number;
  cep?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
