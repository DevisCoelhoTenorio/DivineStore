"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
class LoginController {
    constructor(service) {
        this.service = service;
        this.Login = async (req, res) => {
            const response = await this.service.login(req.body);
            res.status(200).json(response);
        };
        this.validate = async (req, res) => {
            const { authorization } = req.headers;
            const user = await this.service.validade(authorization);
            res.status(200).json(user);
        };
    }
}
exports.default = LoginController;
//# sourceMappingURL=LoginController.js.map