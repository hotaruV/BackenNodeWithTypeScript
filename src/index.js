"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("./config/server");
var dotenv_1 = require("dotenv");
dotenv_1.default.config();
var ser = new server_1.default();
