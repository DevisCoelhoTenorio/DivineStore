"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const services_1 = require("../services");
const router = (0, express_1.Router)();
const service = new services_1.LoginService();
const controller = new controllers_1.LoginController(service);
router.post('/', controller.Login);
exports.default = router;
//# sourceMappingURL=LoginRoutes.js.map