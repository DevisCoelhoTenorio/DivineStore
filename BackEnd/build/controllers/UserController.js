"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
class UserController {
    constructor(userService) {
        this.userService = userService;
        this.findAll = async (_req, res) => {
            const result = await this.userService.findAll();
            res.status(200).json(result);
        };
        this.create = async (req, res) => {
            const result = await this.userService.create(req.body);
            res.status(201).json(result);
        };
    }
}
exports.default = UserController;
