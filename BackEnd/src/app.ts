import express from 'express'
import { ErrorHandler } from './middlewares/ErrorHandler';
import { userRoutes } from './routes';

const app = express();
app.use(express.json());

app.use(userRoutes)

app.use(ErrorHandler.handle)

export default app;