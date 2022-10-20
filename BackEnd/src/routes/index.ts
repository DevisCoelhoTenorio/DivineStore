import { Router } from "express";
import userRoutes from './UserRoutes';
import orderRoutes from './OrderRoutes';
import categoryRoutes from './CategoryRoutes';
import productRoutes from './ProductRoutes';
import clientRoutes from './ClientRoutes';
import paymentMethodRoutes from './PaymentMethodRoutes';
import sizeRoutes from './SizeRoutes';
import saleRoutes from './SaleRoutes';
import inventoryRoutes from './InventoryRoutes';

const routes = Router();

routes.use('/user', userRoutes);
routes.use('/order', orderRoutes);
routes.use('/category', categoryRoutes);
routes.use('/product', productRoutes);
routes.use('/client', clientRoutes);
routes.use('/payment/method', paymentMethodRoutes);
routes.use('/size', sizeRoutes);
routes.use('/sale', saleRoutes);
routes.use('/inventory', inventoryRoutes);

export default routes