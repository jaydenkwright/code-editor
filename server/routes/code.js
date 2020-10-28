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
var verify_1 = require("./middleware/verify");
var router = express_1.Router();
router.get('/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, code, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, db_1.pool.query("SELECT * FROM code WHERE id = $1", [id])];
            case 1:
                code = _a.sent();
                if (code.rows[0]) {
                    res.json(code.rows[0]);
                }
                else {
                    res.status(404).json({ "msg": "Snippet could not be found!" });
                }
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                res.status(500).json({ "msg": "Something went wrong!" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
router.get('/project/:projectId', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var projectId, projectCode, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                projectId = req.params.projectId;
                return [4 /*yield*/, db_1.pool.query("SELECT * FROM code WHERE projectId = $1", [projectId])];
            case 1:
                projectCode = _a.sent();
                if (projectCode.rows) {
                    res.json(projectCode.rows);
                }
                else {
                    res.status(404).json({ "msg": "Project could not be found!" });
                }
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                res.status(500).json({ "msg": "Something went wrong!" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
router.post('/create', verify_1.verify, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, _a, projectId, lang, code, newCode, error_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                user = req.user;
                _a = req.body, projectId = _a.projectId, lang = _a.lang, code = _a.code;
                return [4 /*yield*/, db_1.pool.query("INSERT INTO code (userId, projectId, lang, code, lastUpdated, date) VALUES($1, $2, $3, $4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP) RETURNING *", [user.id, projectId, lang, code])];
            case 1:
                newCode = _b.sent();
                res.json(newCode.rows[0]);
                return [3 /*break*/, 3];
            case 2:
                error_3 = _b.sent();
                res.status(500).json({ "msg": "Something went wrong!" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
router.put('/update/:lang/:id', verify_1.verify, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, _a, lang, id, code, updateCode;
    return __generator(this, function (_b) {
        try {
            user = req.user;
            _a = req.params, lang = _a.lang, id = _a.id;
            code = req.body.code;
            updateCode = db_1.pool.query("UPDATE code SET code = $1, lastUpdated = CURRENT_TIMESTAMP WHERE projectId = $2 AND userId = $3 AND lang = $4", [code, id, user.id, lang]);
            res.json({ "msg": "Updated" });
        }
        catch (error) {
            res.status(500).json({ "msg": "Something went wrong!" });
        }
        return [2 /*return*/];
    });
}); });
router["delete"]('/delete/:id', verify_1.verify, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, id, deleteCode;
    return __generator(this, function (_a) {
        try {
            user = req.user;
            id = req.params.id;
            deleteCode = db_1.pool.query("DELETE FROM code WHERE id = $1 AND userId = $2", [id, user.id]);
            res.json({ "msg": "Deleted" });
        }
        catch (error) {
            res.status(500).json({ "msg": "Something went wrong!" });
        }
        return [2 /*return*/];
    });
}); });
exports["default"] = router;
