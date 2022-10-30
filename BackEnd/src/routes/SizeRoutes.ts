import { Router } from 'express';
import { SizeController } from '../controllers';
import { SizeService } from '../services';

const router = Router();

const service = new SizeService();
const controller = new SizeController(service);

router.get('/', controller.findAll);

export default router;
