"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
class InventoryController {
    constructor(service) {
        this.service = service;
        this.find = async (req, res) => {
            const { inStock } = req.body;
            const result = await this.service.find(inStock);
            res.status(200).json(result);
        };
    }
}
exports.default = InventoryController;
