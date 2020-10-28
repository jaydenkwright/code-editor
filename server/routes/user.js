"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var express_1 = require("express");
var db_1 = require("../db/db");
var bcryptjs_1 = require("bcryptjs");
var jsonwebtoken_1 = require("jsonwebtoken");
var verify_1 = require("./middleware/verify");
var validation_1 = require("./validation/validation");
var router = express_1.Router();
router.post('/register', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var error, _a, name_1, username, email, password, emailExists, usernameExists, salt, hashedPassword, newUser, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 6, , 7]);
                error = validation_1.registrationSchema.validate(req.body).error;
                if (error)
                    return [2 /*return*/, res.status(400).json({ "msg": "Something went wrong!" })];
                _a = req.body, name_1 = _a.name, username = _a.username, email = _a.email, password = _a.password;
                return [4 /*yield*/, db_1.pool.query("SELECT * FROM users WHERE email = $1", [email])];
            case 1:
                emailExists = _b.sent();
                if (emailExists.rows[0])
                    return [2 /*return*/, res.status(400).json({ "msg": "Email is already in use!" })];
                return [4 /*yield*/, db_1.pool.query("SELECT * FROM users WHERE username = $1", [username])];
            case 2:
                usernameExists = _b.sent();
                if (usernameExists.rows[0])
                    return [2 /*return*/, res.status(400).json({ "msg": "Username is already taken!" })];
                return [4 /*yield*/, bcryptjs_1["default"].genSalt(10)];
            case 3:
                salt = _b.sent();
                return [4 /*yield*/, bcryptjs_1["default"].hash(password, salt)];
            case 4:
                hashedPassword = _b.sent();
                return [4 /*yield*/, db_1.pool.query("INSERT INTO users (name, username, email, password, date) VALUES ($1, $2, $3, $4, CURRENT_TIMESTAMP) RETURNING *", [name_1, username, email, hashedPassword])];
            case 5:
                newUser = _b.sent();
                res.json({ "msg": "User created" });
                return [3 /*break*/, 7];
            case 6:
                error_1 = _b.sent();
                res.status(500).json({ "msg": "Something went wrong!" });
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); });
router.post('/login', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var error, _a, email, password, user, validatePassword, token, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                error = validation_1.loginSchema.validate(req.body).error;
                if (error)
                    return [2 /*return*/, res.status(400).json({ "msg": "Something went wrong!" })];
                _a = req.body, email = _a.email, password = _a.password;
                return [4 /*yield*/, db_1.pool.query("SELECT * FROM users WHERE email = $1", [email])];
            case 1:
                user = _b.sent();
                if (!user.rows[0])
                    return [2 /*return*/, res.status(400).json({ "msg": "Email is incorrect" })];
                return [4 /*yield*/, bcryptjs_1["default"].compare(password, user.rows[0].password)];
            case 2:
                validatePassword = _b.sent();
                if (!validatePassword)
                    return [2 /*return*/, res.status(400).json({ 'msg': 'Password is incorrect' })];
                token = jsonwebtoken_1["default"].sign({ id: user.rows[0].id }, "" + process.env.TOKEN_SECRET);
                res.cookie('token', token, {
                    httpOnly: true
                });
                res.header('login-token', token).json({ 'msg': 'Logged In!' });
                return [3 /*break*/, 4];
            case 3:
                error_2 = _b.sent();
                res.status(500).json({ "msg": "Something went wrong!" });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
router.get('/me', verify_1.verify, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, user, _a, name_2, username, email, error_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                id = req.user.id;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, db_1.pool.query("SELECT * FROM users WHERE id = $1", [id])];
            case 2:
                user = _b.sent();
                _a = user.rows[0], name_2 = _a.name, username = _a.username, email = _a.email;
                res.json({
                    id: user.rows[0].id,
                    name: name_2,
                    username: username,
                    email: email
                });
                return [3 /*break*/, 4];
            case 3:
                error_3 = _b.sent();
                res.status(500).json({ "msg": "Something went wrong!" });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
router.get('/isLoggedIn', verify_1.verify, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, res.json({ "msg": "Logged in!" })];
    });
}); });
exports["default"] = router;
