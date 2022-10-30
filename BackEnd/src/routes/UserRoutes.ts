import { Router } from 'express';
import UserController from '../controllers/UserController';
import UserService from '../services/UserService';

const router = Router();

const service = new UserService();
const controller = new UserController(service);

router.get('/', controller.findAll);
router.post('/', controller.create);

export default router;
