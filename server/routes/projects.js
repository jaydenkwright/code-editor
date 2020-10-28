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
router.post('/create', verify_1.verify, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, _a, title, description, privacy, createProject, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                id = req.user.id;
                _a = req.body, title = _a.title, description = _a.description, privacy = _a.privacy;
                return [4 /*yield*/, db_1.pool.query("INSERT INTO projects (userId, title, description, private, date) VALUES ($1, $2, $3, $4, CURRENT_TIMESTAMP) RETURNING *", [id, title, description, privacy])];
            case 1:
                createProject = _b.sent();
                res.json(createProject.rows[0]);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _b.sent();
                res.status(500).json({ "msg": "Something went wrong!" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
router.get('/user/', verify_1.verify, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, userProjects, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.user.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, db_1.pool.query("SELECT * FROM projects WHERE userId = $1 ORDER BY id DESC", [id])];
            case 2:
                userProjects = _a.sent();
                if (userProjects.rows) {
                    res.json(userProjects.rows);
                }
                else {
                    res.status(404).json({ "msg": "No projects found!" });
                }
                return [3 /*break*/, 4];
            case 3:
                error_2 = _a.sent();
                res.status(500).json({ "msg": "Something went wrong!" });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
router.get('/:projectId', verify_1.verify, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, projectId, project, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.user.id;
                projectId = req.params.projectId;
                return [4 /*yield*/, db_1.pool.query("SELECT * FROM projects WHERE id = $1 AND (private = $2 OR userId = $3)", [projectId, false, id])];
            case 1:
                project = _a.sent();
                if (project.rows[0]) {
                    res.json(project.rows[0]);
                }
                else {
                    res.status(404).json({ "msg": "Could not find project!" });
                }
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                res.status(500).json({ "msg": "Something went wrong!" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
router.put('/update/:projectId', verify_1.verify, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, projectId, _a, title, description, privacy, updateProject;
    return __generator(this, function (_b) {
        try {
            id = req.user.id;
            projectId = req.params.projectId;
            _a = req.body, title = _a.title, description = _a.description, privacy = _a.privacy;
            updateProject = db_1.pool.query("UPDATE projects SET title = $1, description = $2, private = $3 WHERE id = $4 AND userId = $5", [title, description, privacy, projectId, id]);
            res.json({ "msg": "Updated" });
        }
        catch (error) {
            res.status(500).json({ "msg": "Something went wrong!" });
        }
        return [2 /*return*/];
    });
}); });
router["delete"]('/delete/:projectId', verify_1.verify, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, projectId, deleteProject, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.user.id;
                projectId = req.params.projectId;
                return [4 /*yield*/, db_1.pool.query("DELETE FROM projects WHERE id = $1 AND userId = $2", [projectId, id])];
            case 1:
                deleteProject = _a.sent();
                res.json({ "msg": "Deleted" });
                return [3 /*break*/, 3];
            case 2:
                error_4 = _a.sent();
                res.status(500).json({ "msg": "Something went wrong!" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
exports["default"] = router;
