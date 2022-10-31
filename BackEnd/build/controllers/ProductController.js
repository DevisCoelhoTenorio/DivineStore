"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
class ProductController {
    constructor(service) {
        this.findAll = async (_req, res) => {
            const result = await this.service.findAll();
            res.status(200).json(result);
        };
        this.findById = async (req, res) => {
            const { id } = req.params;
            const result = await this.service.findById(Number(id));
            res.status(200).json(result);
        };
        this.findByInStock = async (req, res, next) => {
            const { inStock } = req.query;
            if (!inStock) {
                return next();
            }
            const stockStatus = inStock === 'true';
            const result = await this.service.findAll({}, { inStock: stockStatus });
            res.status(200).json(result);
        };
        this.create = async (req, res) => {
            const result = await this.service.create(req.body);
            res.status(201).json(result);
        };
        this.service = service;
    }
}
exports.default = ProductController;
//# sourceMappingURL=ProductController.js.map