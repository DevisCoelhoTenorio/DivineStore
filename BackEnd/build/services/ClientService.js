"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClientModel_1 = __importDefault(require("../database/models/ClientModel"));
class ClientService {
    constructor() {
        this.findAll = async () => {
            const result = await ClientModel_1.default.findAll();
            return result;
        };
        // public create = async({ email, password }: IUser):  Promise<IUser> => {
        //     const result = await UserModel.create({ email, password });
        //     return result
        // }
    }
}
exports.default = ClientService;
