import express from 'express'
import { ErrorHandler } from './middlewares/ErrorHandler';
import { userRoutes } from './routes';
import { orderRoutes } from './routes'

const app = express();
app.use(express.json());

app.use('/user', userRoutes);
app.use('/order', orderRoutes);

app.use(ErrorHandler.handle)

export default app;