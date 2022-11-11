import { Router } from 'express';
import { ProductController } from '../controllers';
import { ProductService } from '../services';

const router = Router();

const service = new ProductService();
const controller = new ProductController(service);

router.get('/', controller.findByInStock);
router.get('/', controller.findAll);
router.get('/:id', controller.findById);
router.post('/', controller.create);
router.delete('/:id', controller.delete);

export default router;
