import { Router } from "express";
import {  CategoryController } from "../controllers";
import { CategoryService } from "../services";

const router = Router();

const service = new CategoryService();
const controller = new CategoryController(service);

router.get("/", controller.findAll);
// router.post("/", controller.create);

export default router;