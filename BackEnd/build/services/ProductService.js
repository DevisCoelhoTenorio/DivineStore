"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SizeModel_1 = __importDefault(require("../database/models/SizeModel"));
const InventoryModel_1 = __importDefault(require("../database/models/InventoryModel"));
const ProductModel_1 = __importDefault(require("../database/models/ProductModel"));
const PhotoModel_1 = __importDefault(require("../database/models/PhotoModel"));
const CategoryModel_1 = __importDefault(require("../database/models/CategoryModel"));
const models_1 = __importDefault(require("../database/models"));
class ProductService {
    constructor() {
        this.findAll = async (search = {}, inStock = {}) => {
            const foundProducts = await ProductModel_1.default.findAll({
                where: search,
                attributes: { exclude: ['categoryId', 'description'] },
                include: [{
                        model: CategoryModel_1.default,
                        as: 'category',
                        attributes: ['name'],
                    }, {
                        model: PhotoModel_1.default,
                        as: 'photos',
                        where: inStock,
                        attributes: ['img', 'thumbnail'],
                    }],
            });
            return foundProducts;
        };
        this.findById = async (id) => {
            const result = await ProductModel_1.default.findByPk(id, {
                attributes: { exclude: ['categoryId'] },
                include: [{
                        model: CategoryModel_1.default, as: 'category', attributes: ['name'],
                    }, {
                        model: PhotoModel_1.default, as: 'photos', attributes: ['img', 'thumbnail'],
                    }, {
                        model: InventoryModel_1.default,
                        as: 'stock',
                        attributes: ['quantity'],
                        include: [{
                                model: SizeModel_1.default,
                                as: 'size',
                                attributes: ['name'],
                            }],
                    }],
            });
            return result;
        };
        this.create = async (newProduct) => {
            const { photos } = newProduct;
            const newId = await models_1.default.transaction(async (t) => {
                const { id } = await ProductModel_1.default.create({ ...newProduct }, { transaction: t });
                const photosWithId = photos.map((photo) => ({ ...photo, productId: id }));
                await PhotoModel_1.default.bulkCreate(photosWithId, { transaction: t });
                return id;
            });
            const result = await this.findAll({ newId });
            return result[0];
        };
    }
}
exports.default = ProductService;
//# sourceMappingURL=ProductService.js.map