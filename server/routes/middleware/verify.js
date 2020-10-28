"use strict";
exports.__esModule = true;
exports.verify = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
exports.verify = function (req, res, next) {
    var token = req.cookies.token;
    if (!token)
        return res.status(401).json({ "msg": "User is not logged in!" });
    try {
        var verified = jsonwebtoken_1["default"].verify(token, "" + process.env.TOKEN_SECRET);
        req.user = verified;
        next();
    }
    catch (error) {
        res.json(400).json({ "msg": "Something went wrong!" });
    }
};
