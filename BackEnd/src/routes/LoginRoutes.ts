import { Router } from 'express';
import { LoginController } from '../controllers';
import { LoginService } from '../services';

const router = Router();

const service = new LoginService();
const controller = new LoginController(service);

router.post('/', controller.Login);

export default router;
