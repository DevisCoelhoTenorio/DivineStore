"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClientModel_1 = __importDefault(require("../database/models/ClientModel"));
const CustomError_1 = __importDefault(require("../utils/CustomError"));
class ClientService {
    constructor() {
        this.find = async (search = {}) => {
            const result = await ClientModel_1.default.findAll({
                where: search,
            });
            return result;
        };
        this.create = async (client) => {
            const checkEmail = await this.find({ email: client.email });
            const checkPhoneNumber = await this.find({ phoneNumber: client.phoneNumber });
            if (checkEmail.length > 1 || checkPhoneNumber.length > 1) {
                throw new CustomError_1.default('Email or PhoneNumber already exists', 'already.exists');
            }
            const result = await ClientModel_1.default.create({ ...client });
            return result;
        };
        this.update = async (id, client) => {
            const checkId = await this.find({ id });
            if (checkId.length !== 1) {
                throw new CustomError_1.default('Client does not exist', 'not.exist');
            }
            await ClientModel_1.default.update({ ...client }, { where: { id } });
            const [result] = await this.find({ id });
            return result;
        };
        this.delete = async (search = {}) => {
            const checkUser = await this.find(search);
            if (checkUser.length !== 1) {
                throw new CustomError_1.default('Client does not exist', 'not.exist');
            }
            await ClientModel_1.default.destroy({
                where: search,
            });
            return 'Client has been deleted';
        };
    }
}
exports.default = ClientService;
//# sourceMappingURL=ClientService.js.map