import { Router } from "express";
import {  ClientController } from "../controllers";
import { ClientService } from "../services";

const router = Router();

const service = new ClientService();
const controller = new ClientController(service);

router.get("/", controller.findAll);
// router.post("/", controller.create);

export default router;