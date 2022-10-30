"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const services_1 = require("../services");
const router = (0, express_1.Router)();
const service = new services_1.SizeService();
const controller = new controllers_1.SizeController(service);
router.get('/', controller.findAll);
exports.default = router;
//# sourceMappingURL=SizeRoutes.js.map