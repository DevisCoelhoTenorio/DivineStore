"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PhotoModel_1 = __importDefault(require("../database/models/PhotoModel"));
class PhotoService {
    constructor() {
        this.findAll = async (search = {}) => {
            const result = await PhotoModel_1.default.findAll({
                where: { search }
            });
            return result;
        };
        this.create = async (newImg) => {
            const result = await PhotoModel_1.default.create({ ...newImg });
            return result;
        };
        this.delete = async (id) => {
            await PhotoModel_1.default.destroy({
                where: { id }
            });
        };
    }
}
exports.default = PhotoService;
