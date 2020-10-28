"use strict";
exports.__esModule = true;
exports.loginSchema = exports.registrationSchema = void 0;
var joi_1 = require("@hapi/joi");
exports.registrationSchema = joi_1["default"].object({
    name: joi_1["default"].string().min(1).max(50).required(),
    username: joi_1["default"].string().min(3).max(100).required(),
    email: joi_1["default"].string().min(7).max(200).required().email(),
    password: joi_1["default"].string().min(6).max(300).required()
});
exports.loginSchema = joi_1["default"].object({
    email: joi_1["default"].string().max(200).required().email(),
    password: joi_1["default"].string().max(300).required()
});
