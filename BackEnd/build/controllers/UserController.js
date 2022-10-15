"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserService_1 = __importDefault(require("../services/UserService"));
require("express-async-errors");
class UserController {
    constructor(userService = new UserService_1.default()) {
        this.userService = userService;
        this.findAll = async (_req, res) => {
            const result = await this.userService.findAll();
            res.status(200).json(result);
        };
    }
}
exports.default = UserController;
