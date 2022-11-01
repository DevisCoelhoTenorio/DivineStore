"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
class LoginController {
    constructor(service) {
        this.service = service;
        this.Login = async (req, res) => {
            const response = await this.service.login(req.body);
            res.status(200).json({ token: response });
        };
        this.validate = async (req, res) => {
            const { authorization } = req.headers;
            await this.service.validade(authorization);
            res.sendStatus(200);
        };
    }
}
exports.default = LoginController;
//# sourceMappingURL=LoginController.js.map