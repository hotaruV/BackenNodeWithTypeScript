import { Router } from "express";
import { controllers } from "../controllers/controllers";


class routeEntregas {
    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    routes() {
        this.router.get("/index", controllers.entregasController.getentregas);
        this.router.get("/procesos", controllers.userController.getProcesos);
    }
}

export default routeEntregas;
