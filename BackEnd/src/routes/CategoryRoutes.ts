import { Router } from "express";
import {  CategoryController } from "../controllers";
import { CategoryService } from "../services";
import validation from "../middlewares/categoryValidation";

const router = Router();

const service = new CategoryService();
const controller = new CategoryController(service);

router.get("/", validation.find, controller.findAll);
router.post("/", validation.create, controller.create);

export default router;