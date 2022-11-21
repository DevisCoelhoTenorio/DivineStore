"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const services_1 = require("../services");
const router = (0, express_1.Router)();
const service = new services_1.AddressService();
const controller = new controllers_1.AddressController(service);
router.get('/', controller.find);
exports.default = router;
//# sourceMappingURL=AddressRoutes.js.map