import { Router } from 'express';
import { LoginController } from '../controllers';
import { LoginService } from '../services';
import userValidation from '../middlewares/userValidation';

const router = Router();

const service = new LoginService();
const controller = new LoginController(service);

router.post('/', userValidation.login, controller.Login);
router.get('/', controller.validate);

export default router;
