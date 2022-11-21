"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
class AddressController {
    constructor(service) {
        this.service = service;
        this.find = async (req, res) => {
            const result = await this.service.find(req.body);
            res.status(200).json(result);
        };
    }
}
exports.default = AddressController;
//# sourceMappingURL=AddressController.js.map