import { Router } from 'express';
import { SaleController } from '../controllers';
import { SaleService } from '../services';

const router = Router();

const service = new SaleService();
const controller = new SaleController(service);

router.get('/', controller.findAll);
// router.post("/", controller.create);

export default router;
