"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SizeModel_1 = __importDefault(require("../database/models/SizeModel"));
const ProductModel_1 = __importDefault(require("../database/models/ProductModel"));
const InventoryModel_1 = __importDefault(require("../database/models/InventoryModel"));
const PhotoModel_1 = __importDefault(require("../database/models/PhotoModel"));
const CategoryModel_1 = __importDefault(require("../database/models/CategoryModel"));
const models_1 = __importDefault(require("../database/models"));
const Formatters_1 = require("../utils/Formatters");
class ProductService {
    constructor() {
        this.findAll = async (search = {}, inStock = {}) => {
            const foundProducts = await ProductModel_1.default.findAll({
                where: search,
                attributes: { exclude: ['categoryId', 'description'] },
                include: [{
                        model: CategoryModel_1.default, as: 'category', attributes: ['name'],
                    }, {
                        model: PhotoModel_1.default, as: 'photos', where: inStock, attributes: ['img', 'thumbnail'],
                    }, {
                        model: InventoryModel_1.default,
                        as: 'stock',
                        attributes: ['quantity'],
                        include: [{
                                model: SizeModel_1.default, as: 'size', attributes: ['name'],
                            }],
                    }],
            });
            return foundProducts;
        };
        this.findById = async (id) => {
            const result = await ProductModel_1.default.findByPk(id, {
                attributes: { exclude: ['categoryId'] },
                include: [{
                        model: CategoryModel_1.default, as: 'category', attributes: ['name', 'id'],
                    }, {
                        model: PhotoModel_1.default, as: 'photos', attributes: ['img', 'thumbnail'],
                    }, {
                        model: InventoryModel_1.default,
                        as: 'stock',
                        attributes: ['quantity'],
                        include: [{
                                model: SizeModel_1.default,
                                as: 'size',
                                attributes: ['name', 'id'],
                            }],
                    }],
            });
            return result;
        };
        this.create = async (newProduct) => {
            const { photos, sizes, ...rest } = newProduct;
            const newId = await models_1.default.transaction(async (t) => {
                const { id } = await ProductModel_1.default.create({ ...rest }, { transaction: t });
                const photosWithId = (0, Formatters_1.formatterPhotosForCreate)(photos, id);
                const inventoryWithId = (0, Formatters_1.formatterSizeForCreate)(sizes, id);
                await PhotoModel_1.default.bulkCreate(photosWithId, { transaction: t });
                await InventoryModel_1.default.bulkCreate(inventoryWithId, { transaction: t });
                return id;
            });
            const result = await this.findById(newId);
            return result;
        };
        this.delete = async (id) => {
            await ProductModel_1.default.destroy({ where: { id } });
        };
        this.update = async (id, updateProduct) => {
            const { photos, sizes, ...rest } = updateProduct;
            await models_1.default.transaction(async (t) => {
                await ProductModel_1.default.update({ ...rest }, { where: { id }, transaction: t });
                await PhotoModel_1.default.destroy({ where: { productId: id }, transaction: t });
                await InventoryModel_1.default.destroy({ where: { productId: id }, transaction: t });
                const photosWithId = (0, Formatters_1.formatterPhotosForCreate)(photos, id);
                const inventoryWithId = (0, Formatters_1.formatterSizeForCreate)(sizes, id);
                await PhotoModel_1.default.bulkCreate(photosWithId, { transaction: t });
                await InventoryModel_1.default.bulkCreate(inventoryWithId, { transaction: t });
            });
        };
    }
}
exports.default = ProductService;
//# sourceMappingURL=ProductService.js.map