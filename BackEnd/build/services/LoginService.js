"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CustomError_1 = __importDefault(require("../utils/CustomError"));
const UserService_1 = __importDefault(require("./UserService"));
const auth_1 = require("../validations/auth");
class LoginService {
    constructor() {
        this.service = new UserService_1.default();
        this.checkUser = async (user) => {
            const result = await this.service.findAll(user);
            if (result.length !== 1) {
                throw new CustomError_1.default('Incorrect email or password', 'not.login');
            }
            return result[0];
        };
        this.login = async (user) => {
            const { id, email, name, admin } = await this.checkUser(user);
            const token = (0, auth_1.generateToken)({ id, email, name, admin });
            return { token, user: { name, email, access: admin } };
        };
        this.validade = async (token) => {
            const payload = (0, auth_1.authTokenValidation)(token);
            return payload;
        };
    }
}
exports.default = LoginService;
//# sourceMappingURL=LoginService.js.map