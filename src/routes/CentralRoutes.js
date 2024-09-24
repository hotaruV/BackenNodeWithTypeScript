"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllRoutes = void 0;
var entregas_route_1 = require("./entregas.route");
var user_route_1 = require("./user.route");
exports.AllRoutes = {
    UsersRoute: new user_route_1.default(),
    EntregasRoute: new entregas_route_1.default(),
};
