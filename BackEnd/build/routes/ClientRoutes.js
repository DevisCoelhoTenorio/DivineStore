"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const services_1 = require("../services");
const clientValidation_1 = __importDefault(require("../middlewares/clientValidation"));
const router = (0, express_1.Router)();
const service = new services_1.ClientService();
const controller = new controllers_1.ClientController(service);
router.get("/", controller.find);
router.post("/", clientValidation_1.default.create, controller.create);
exports.default = router;
