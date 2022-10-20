"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
class CategoryController {
    constructor(service) {
        this.service = service;
        this.findAll = async (_req, res) => {
            const result = await this.service.findAll();
            res.status(200).json(result);
        };
    }
}
exports.default = CategoryController;
