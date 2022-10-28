import PaymentMethod from '../database/models/PaymentMethodModel';
import { IPaymentMethods } from '../interfaces';

export default class PaymentMethodService {
   
    public findAll = async(): Promise<IPaymentMethods []> => {
        const result = await PaymentMethod.findAll()
        return result;
    }

    public create = async(method: string): Promise<IPaymentMethods> => {
        const result = await PaymentMethod.create({ method })
        return result;
    }

    public delete = async (id: number): Promise<void> => {
        await PaymentMethod.destroy({
            where: { id },
        })
    }
   
}