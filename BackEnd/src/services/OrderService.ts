import Client from '../database/models/ClientModel';
import OrderModel from '../database/models/OrderModel';
import PaymentMethod from '../database/models/PaymentMethodModel';
import { IOrder } from '../interfaces';

export default class OrderService {
  public findAll = async (): Promise<IOrder[]> => {
    const result = await OrderModel.findAll({
      include: [{
        model: Client,
        as: 'client',
        attributes: { exclude: ['updatedAt', 'createAt'] },
      },
      {
        model: PaymentMethod,
        as: 'paymentMethod',
      },
      ],
    });

    return result;
  };
}
