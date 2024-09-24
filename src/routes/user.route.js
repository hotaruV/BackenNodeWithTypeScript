"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controllers_1 = require("../controllers/controllers");
var routeUser = /** @class */ (function () {
    function routeUser() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routeUser.prototype.routes = function () {
        this.router.get("/index", controllers_1.controllers.userController.getUsers);
        //this.router.post("/user", controllers.userController.createUser);
    };
    return routeUser;
}());
exports.default = routeUser;
