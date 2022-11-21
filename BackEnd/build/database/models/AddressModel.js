"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
const ClientModel_1 = __importDefault(require("./ClientModel"));
class Address extends sequelize_1.Model {
}
Address.init({
    clientId: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    city: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
    state: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
    district: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
    locality: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
    number: {
        type: sequelize_1.INTEGER,
    },
    cep: {
        type: sequelize_1.STRING,
    },
    updatedAt: {
        type: sequelize_1.DATE
    },
    createdAt: {
        type: sequelize_1.DATE
    }
}, {
    sequelize: _1.default,
    underscored: true,
    modelName: 'addresses',
});
// Adress Association
Address.belongsTo(ClientModel_1.default, { foreignKey: 'clientId', as: 'address' });
ClientModel_1.default.belongsTo(Address, { foreignKey: 'id', as: 'address' });
exports.default = Address;
//# sourceMappingURL=AddressModel.js.map