"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const services_1 = require("../services");
const router = (0, express_1.Router)();
const service = new services_1.BannerService();
const controller = new controllers_1.BannerController(service);
router.get('/', controller.find);
router.post('/', controller.create);
router.delete('/', controller.delete);
exports.default = router;
//# sourceMappingURL=BannerRoutes.js.map