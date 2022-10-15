"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = __importDefault(require("../controllers/UserController"));
// import UserRepository from '../model'
// import UserService from '../services'
const router = (0, express_1.Router)();
const userController = new UserController_1.default();
// const repository = new UserPository();
// const service = new UserService(repository)
// const controller = new UserController(service)
router.get('/', userController.findAll);
exports.default = router;
