"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authTokenValidation = exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const CustomError_1 = __importDefault(require("../utils/CustomError"));
const jwtConfig = {
    expiresIn: '20h',
    algorithm: 'HS256',
};
const SECRET = process.env.JWT_SECRET;
const generateToken = (payload) => jsonwebtoken_1.default
    .sign(payload, SECRET, jwtConfig);
exports.generateToken = generateToken;
const authTokenValidation = (token) => {
    if (!token) {
        throw new CustomError_1.default('Token not found', 'not.token');
    }
    try {
        const verification = jsonwebtoken_1.default.verify(token, SECRET);
        return verification;
    }
    catch {
        throw new CustomError_1.default('Invalid token', 'not.token');
    }
};
exports.authTokenValidation = authTokenValidation;
