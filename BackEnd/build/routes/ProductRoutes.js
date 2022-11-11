"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const services_1 = require("../services");
const router = (0, express_1.Router)();
const service = new services_1.ProductService();
const controller = new controllers_1.ProductController(service);
router.get('/', controller.findByInStock);
router.get('/', controller.findAll);
router.get('/:id', controller.findById);
router.post('/', controller.create);
router.delete('/:id', controller.delete);
exports.default = router;
//# sourceMappingURL=ProductRoutes.js.map