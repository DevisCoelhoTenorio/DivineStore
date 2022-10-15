"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var ErrorHandler_1 = require("./middlewares/ErrorHandler");
var routes_1 = require("./routes");
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(routes_1.userRoutes);
app.use(ErrorHandler_1.ErrorHandler.handle);
exports.default = app;