import { Router } from "express";
import {  InventoryController } from "../controllers";
import { InventoryService } from "../services";

const router = Router();

const service = new InventoryService();
const controller = new InventoryController(service);

router.get("/", controller.findAll);
// router.post("/", controller.create);

export default router;