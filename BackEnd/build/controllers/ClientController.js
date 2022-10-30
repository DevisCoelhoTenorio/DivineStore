"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
class ClientController {
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
    }
}
exports.default = ClientController;
//# sourceMappingURL=ClientController.js.map