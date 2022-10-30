"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = __importDefault(require("../controllers/UserController"));
const UserService_1 = __importDefault(require("../services/UserService"));
const router = (0, express_1.Router)();
const service = new UserService_1.default();
const controller = new UserController_1.default(service);
router.get('/', controller.findAll);
router.post('/', controller.create);
exports.default = router;
//# sourceMappingURL=UserRoutes.js.map