import { Router } from "express";
import {  ClientController } from "../controllers";
import { ClientService } from "../services";
import validation from "../middlewares/clientValidation";

const router = Router();

const service = new ClientService();
const controller = new ClientController(service);

router.get("/", controller.find);
router.post("/", validation.create, controller.create);

export default router;