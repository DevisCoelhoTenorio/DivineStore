"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandler = void 0;
var ErrorHandler = /** @class */ (function () {
    function ErrorHandler() {
    }
    ErrorHandler.handle = function (error, _req, res, next) {
        res.status(500).json({ message: error.message });
        next();
    };
    return ErrorHandler;
}());
exports.ErrorHandler = ErrorHandler;
