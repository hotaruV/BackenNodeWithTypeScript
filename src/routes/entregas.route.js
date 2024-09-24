"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controllers_1 = require("../controllers/controllers");
var routeEntregas = /** @class */ (function () {
    function routeEntregas() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routeEntregas.prototype.routes = function () {
        this.router.get("/index", controllers_1.controllers.entregasController.getentregas);
        this.router.get("/procesos", controllers_1.controllers.entregasController.getProcesos);
    };
    return routeEntregas;
}());
exports.default = routeEntregas;
