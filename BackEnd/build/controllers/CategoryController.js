"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
class CategoryController {
    constructor(service) {
        this.service = service;
        this.find = async (req, res) => {
            const result = await this.service.find(req.body);
            res.status(200).json(result);
        };
        this.create = async (req, res) => {
            const result = await this.service.create(req.body);
            res.status(201).json(result);
        };
        this.delete = async (req, res) => {
            const { id } = req.params;
            await this.service.delete(Number(id));
            res.status(200).json({ message: 'Category deletado com sucesso' });
        };
    }
}
exports.default = CategoryController;
//# sourceMappingURL=CategoryController.js.map