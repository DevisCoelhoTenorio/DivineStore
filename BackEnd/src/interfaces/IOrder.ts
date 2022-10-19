export interface IOrder {
    id: number;
    clientId: number;
    methodId: number;
    fullPrice: string;
    installments: number;
    updatedAt: Date;
    createAt: Date;
}