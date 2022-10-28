import { Router } from "express";
import {  InventoryController } from "../controllers";
import { InventoryService } from "../services";
import validation from "../middlewares/inventoryValidation";

const router = Router();

const service = new InventoryService();
const controller = new InventoryController(service);

router.get("/", validation.find , controller.find);
// router.post("/", controller.create);

export default router;