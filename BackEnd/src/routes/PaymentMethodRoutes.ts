import { Router } from "express";
import {  PaymentMethodController } from "../controllers";
import { PaymentMethodService } from "../services";

const router = Router();

const service = new PaymentMethodService();
const controller = new PaymentMethodController(service);

router.get("/", controller.findAll);
// router.post("/", controller.create);

export default router;