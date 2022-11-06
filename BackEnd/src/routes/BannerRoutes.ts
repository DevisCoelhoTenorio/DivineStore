import { Router } from 'express';
import { BannerController } from '../controllers';
import { BannerService } from '../services';

const router = Router();

const service = new BannerService();
const controller = new BannerController(service);

router.get('/', controller.find);
router.post('/', controller.create);
router.delete('/', controller.delete);

export default router;
