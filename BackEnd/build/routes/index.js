"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserRoutes_1 = __importDefault(require("./UserRoutes"));
const OrderRoutes_1 = __importDefault(require("./OrderRoutes"));
const CategoryRoutes_1 = __importDefault(require("./CategoryRoutes"));
const ProductRoutes_1 = __importDefault(require("./ProductRoutes"));
const ClientRoutes_1 = __importDefault(require("./ClientRoutes"));
const PaymentMethodRoutes_1 = __importDefault(require("./PaymentMethodRoutes"));
const SizeRoutes_1 = __importDefault(require("./SizeRoutes"));
const SaleRoutes_1 = __importDefault(require("./SaleRoutes"));
const InventoryRoutes_1 = __importDefault(require("./InventoryRoutes"));
const routes = (0, express_1.Router)();
routes.use('/user', UserRoutes_1.default);
routes.use('/order', OrderRoutes_1.default);
routes.use('/category', CategoryRoutes_1.default);
routes.use('/product', ProductRoutes_1.default);
routes.use('/client', ClientRoutes_1.default);
routes.use('/payment/method', PaymentMethodRoutes_1.default);
routes.use('/size', SizeRoutes_1.default);
routes.use('/sale', SaleRoutes_1.default);
routes.use('/inventory', InventoryRoutes_1.default);
exports.default = routes;
//# sourceMappingURL=index.js.map