import PaymentMethod from '../database/models/PaymentMethodModel';
import { IPaymentMethods } from '../interfaces';

export default class PaymentMethodService {
   
    public findAll = async(): Promise<IPaymentMethods []> => {

        const result = await PaymentMethod.findAll()
        
        return result;
    }
   
}