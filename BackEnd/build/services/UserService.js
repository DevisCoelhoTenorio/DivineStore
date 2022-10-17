"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserModel_1 = __importDefault(require("../database/models/UserModel"));
class UserService {
    constructor() {
        this.findAll = async () => {
            const foundAllUsers = await UserModel_1.default.findAll({
                attributes: { exclude: ['password'] }
            });
            return foundAllUsers;
        };
        this.create = async ({ email, password }) => {
            const result = await UserModel_1.default.create({ email, password });
            return result;
        };
    }
}
exports.default = UserService;
