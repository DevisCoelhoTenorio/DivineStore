import express from 'express';
import cors from 'cors';
import ErrorHandler from './middlewares/ErrorHandler';
import routes from './routes';

const app = express();
app.use(cors());
app.use(express.json());

app.use(routes);

app.use(ErrorHandler.handle);

export default app;
