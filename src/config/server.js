"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cors_1 = require("cors");
var db_1 = require("./db");
var CentralRoutes_1 = require("../routes/CentralRoutes");
var Server = /** @class */ (function () {
    function Server() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || "3000";
        this.middlewares();
        this.routes();
        this.ServerInit();
    }
    Server.prototype.ServerInit = function () {
        var _this = this;
        this.app.listen(this.port, function () {
            console.log("Escuchando en el puerto:", _this.port);
        });
        var db = db_1.default.getInstance(); // Usa el método estático para obtener la instancia
        db.getInstance().authenticate()
            .then(function () {
            //console.log('Conexión a la base de datos establecida.');
        })
            .catch(function (error) {
            console.error('Error en la conexión a la base de datos:', error);
        });
    };
    Server.prototype.middlewares = function () {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
    };
    Server.prototype.routes = function () {
        this.app.use("/api/users/", CentralRoutes_1.AllRoutes.UsersRoute.router);
        this.app.use("/api/entregas/", CentralRoutes_1.AllRoutes.EntregasRoute.router);
    };
    return Server;
}());
exports.default = Server;
