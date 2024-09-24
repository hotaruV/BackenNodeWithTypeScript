"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Models = void 0;
var users_model_1 = require("../models/users.model");
var entregas_models_1 = require("./entregas.models");
exports.Models = {
    User: new users_model_1.default(),
    Entregas: new entregas_models_1.default
};
