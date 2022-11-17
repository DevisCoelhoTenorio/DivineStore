import { Router } from 'express';
import { AddressController } from '../controllers';
import { AddressService } from '../services';

const router = Router();

const service = new AddressService();
const controller = new AddressController(service);

router.get('/', controller.find);

export default router;
