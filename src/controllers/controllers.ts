import entregasController from "./entregas.controller";
import userController from "./user.controller.user";

export const controllers = {
    userController: new userController(),
    entregasController: new entregasController
};