"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BannerModel_1 = __importDefault(require("../database/models/BannerModel"));
const CustomError_1 = __importDefault(require("../utils/CustomError"));
class BannerService {
    constructor() {
        this.find = async (search = {}) => {
            const result = await BannerModel_1.default.findAll({
                where: search,
            });
            return result;
        };
        this.create = async ({ name, img }) => {
            const checkName = await this.find({ img });
            if (checkName.length >= 1) {
                throw new CustomError_1.default('This banner already exists', 'banner.exists');
            }
            const result = await BannerModel_1.default.create({ name, img });
            return result;
        };
        this.delete = async (id) => {
            await BannerModel_1.default.destroy({
                where: { id },
            });
        };
    }
}
exports.default = BannerService;
//# sourceMappingURL=BannerService.js.map