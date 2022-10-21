import { Router } from "express";
import {  CategoryController } from "../controllers";
import { CategoryService } from "../services";
import validation from "../middlewares/validation";

const router = Router();

const service = new CategoryService();
const controller = new CategoryController(service);

router.get("/", validation.findCategory, controller.findAll);
router.post("/", validation.createCategory, controller.create);

export default router;