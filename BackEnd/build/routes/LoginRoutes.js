"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const services_1 = require("../services");
const userValidation_1 = __importDefault(require("../middlewares/userValidation"));
const router = (0, express_1.Router)();
const service = new services_1.LoginService();
const controller = new controllers_1.LoginController(service);
router.post('/', userValidation_1.default.login, controller.Login);
exports.default = router;
//# sourceMappingURL=LoginRoutes.js.map