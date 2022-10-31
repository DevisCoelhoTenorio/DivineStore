"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserModel_1 = __importDefault(require("../database/models/UserModel"));
class UserService {
    constructor() {
        this.findAll = async (search = {}) => {
            const result = await UserModel_1.default.findAll({
                where: search,
                attributes: { exclude: ['password'] },
            });
            return result;
        };
        this.create = async ({ email, password }) => {
            const result = await UserModel_1.default.create({ email, password });
            return result;
        };
        this.delete = async (id) => {
            await UserModel_1.default.destroy({ where: { id } });
        };
        this.update = async (id, user) => {
            await UserModel_1.default.update({ ...user }, { where: { id } });
            const result = await this.findAll(id);
            return result;
        };
    }
}
exports.default = UserService;
//# sourceMappingURL=UserService.js.map