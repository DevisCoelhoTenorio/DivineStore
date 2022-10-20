import { Router } from "express";
import { ProductController } from "../controllers";
import { ProductService } from "../services";

const router = Router();

const service = new ProductService();
const controller = new ProductController(service);

router.get("/", controller.findAll);
router.post("/", controller.create);

export default router;