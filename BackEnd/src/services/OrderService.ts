import OrderModel from '../database/models/OrderModel';
import { IOrder } from '../interfaces/IOrder';

export default class OrderService {
   
    public findAll = async(): Promise<IOrder[]> => {

        const foundAllOrder = await OrderModel.findAll()
        
        return foundAllOrder;
    }
    // public create = async({ email, password }: IUser):  Promise<IUser> => {
    //     const result = await UserModel.create({ email, password });
    //     return result
    // }
}