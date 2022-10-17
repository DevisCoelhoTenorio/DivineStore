"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = __importDefault(require("../controllers/UserController"));
const UserService_1 = __importDefault(require("../services/UserService"));
const router = (0, express_1.Router)();
const userService = new UserService_1.default();
const userController = new UserController_1.default(userService);
router.get('/', userController.findAll);
router.post('/', userController.create);
exports.default = router;
