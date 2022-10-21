import { Router } from "express";
import {  ClientController } from "../controllers";
import { ClientService } from "../services";
import validation from "../middlewares/validation";

const router = Router();

const service = new ClientService();
const controller = new ClientController(service);

router.get("/", controller.findAll);
router.post("/", validation.createClient, controller.create);

export default router;