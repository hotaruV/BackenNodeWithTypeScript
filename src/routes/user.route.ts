import { Router } from "express";
import { controllers } from "../controllers/controllers";


class routeUser {
    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    routes() {
        this.router.get("/index", controllers.userController.getUsers);
        this.router.post("/user", controllers.userController.createUser);
    }
}

export default routeUser;
