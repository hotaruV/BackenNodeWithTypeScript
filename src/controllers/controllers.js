"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controllers = void 0;
var entregas_controller_1 = require("./entregas.controller");
var user_controller_user_1 = require("./user.controller.user");
exports.controllers = {
    userController: new user_controller_user_1.default(),
    entregasController: new entregas_controller_1.default
};
