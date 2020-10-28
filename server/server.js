"use strict";
exports.__esModule = true;
var express_1 = require("express");
var code_1 = require("./routes/code");
var projects_1 = require("./routes/projects");
var dotenv_1 = require("dotenv");
var cors_1 = require("cors");
var user_1 = require("./routes/user");
var cookie_parser_1 = require("cookie-parser");
dotenv_1["default"].config();
var app = express_1["default"]();
app.use(express_1["default"].json());
app.use(cookie_parser_1["default"]());
app.use(cors_1["default"]({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use('/api/code', code_1["default"]);
app.use('/api/project/', projects_1["default"]);
app.use('/api/user/', user_1["default"]);
var port = process.env.PORT || 5000;
app.listen(port, function () {
    console.log("server running on port " + port);
});
