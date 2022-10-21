import { Router } from "express";
import {  InventoryController } from "../controllers";
import { InventoryService } from "../services";
import validation from "../middlewares/validation";

const router = Router();

const service = new InventoryService();
const controller = new InventoryController(service);

router.get("/", validation.inStock, controller.findAll);
// router.post("/", controller.create);

export default router;