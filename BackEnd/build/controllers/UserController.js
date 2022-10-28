"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
class UserController {
    constructor(service) {
        this.service = service;
        this.create = async (req, res) => {
            const result = await this.service.create(req.body);
            res.status(201).json(result);
        };
        this.findAll = async (_req, res) => {
            const result = await this.service.findAll();
            res.status(200).json(result);
        };
        this.update = async (req, res) => {
            const { body, params: { userId } } = req;
            const response = await this.service.update(Number(userId), body);
            res.status(201).json({ message: response });
        };
        this.delete = async (req, res) => {
            const { photoId } = req.params;
            await this.service.delete(Number(photoId));
            res.status(200).json({ message: 'Usuário deletado com sucesso' });
        };
    }
}
exports.default = UserController;
