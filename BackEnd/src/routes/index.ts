import { Router } from 'express';
import userRoutes from './UserRoutes';
import orderRoutes from './OrderRoutes';
import categoryRoutes from './CategoryRoutes';
import productRoutes from './ProductRoutes';
import clientRoutes from './ClientRoutes';
import paymentMethodRoutes from './PaymentMethodRoutes';
import sizeRoutes from './SizeRoutes';
import saleRoutes from './SaleRoutes';
import inventoryRoutes from './InventoryRoutes';
import loginRoutes from './LoginRoutes';
import bannerRoutes from './BannerRoutes';

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
routes.use('/login', loginRoutes);
routes.use('/banner', bannerRoutes);

export default routes;
