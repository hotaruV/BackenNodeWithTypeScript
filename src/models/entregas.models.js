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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = require("../config/db");
var EntregasModel = /** @class */ (function () {
    function EntregasModel() {
        var dbInstance = db_1.default.getInstance();
        this.sequelize = dbInstance.getInstance();
    }
    EntregasModel.prototype.EmpleadosAll = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var consulta, results, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        consulta = "\n                    select usuario.id_usuario id_empleado, concat(empleado.nombre,' ',empleado.apaterno,' ',empleado.amaterno) empleado\n                    from  tg_usuario AS usuario \n                    INNER JOIN tg_empleado AS empleado ON (usuario.tg_empleado_id = empleado.id_empleado) \n                    order by empleado.apaterno asc\n            ";
                        return [4 /*yield*/, this.sequelize.query(consulta)];
                    case 1:
                        results = (_a.sent())[0];
                        return [2 /*return*/, results];
                    case 2:
                        error_1 = _a.sent();
                        console.error("Error al obtener los usuarios:", error_1);
                        throw error_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    EntregasModel.prototype.subProcesos = function (entrega) {
        return __awaiter(this, void 0, void 0, function () {
            var consulta, results, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(entrega);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        consulta = "\n                    select ote.ot_entrega_id, ote.f_inicia, ote.f_finaliza, ote.f_real_ent ,ote.seguimiento ,ote.tipo, ote.status, ote.plan_gen, ote.f_alta, ote.tps_subproceso_id, ote.id_responsable ,sp.nombre as subproceso,\n                    DATEDIFF(ote.f_real_ent, ote.f_finaliza) AS desviacion\n                    from ot_planeacion_entrega ote \n                    inner join tps_subproceso sp on sp.id_subproceso = ote.tps_subproceso_id\n                    where ot_entrega_id = ".concat(entrega, "\n                    and tps_proceso_id = 14;\n            ");
                        return [4 /*yield*/, this.sequelize.query(consulta)];
                    case 2:
                        results = (_a.sent())[0];
                        return [2 /*return*/, results];
                    case 3:
                        error_2 = _a.sent();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return EntregasModel;
}());
exports.default = EntregasModel;
