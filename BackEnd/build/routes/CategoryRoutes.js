"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const services_1 = require("../services");
const categoryValidation_1 = __importDefault(require("../middlewares/categoryValidation"));
const router = (0, express_1.Router)();
const service = new services_1.CategoryService();
const controller = new controllers_1.CategoryController(service);
router.get('/', categoryValidation_1.default.find, controller.find);
router.post('/', categoryValidation_1.default.create, controller.create);
exports.default = router;
//# sourceMappingURL=CategoryRoutes.js.map