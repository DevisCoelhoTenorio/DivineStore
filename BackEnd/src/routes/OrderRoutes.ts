import { Router } from "express";
import { OrderController } from "../controllers";
import { OrderService } from "../services";

const router = Router();

const service = new OrderService();
const controller = new OrderController(service);

router.get("/", controller.findAll);
// router.post("/", userController.create);

export default router;