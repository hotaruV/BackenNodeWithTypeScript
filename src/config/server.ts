import express, { Application } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from './db'; 
import { AllRoutes } from "../routes/CentralRoutes";

export default class Server {
    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || "3000";
        this.ServerInit();
        this.middlewares();
        this.routes();
    }

    ServerInit() {
        this.app.listen(this.port, () => {
            console.log("Escuchando en el puerto:", this.port);
        });
        
        const db = new connectDB();
        db.getInstance().sync()
            .then(() => {
                console.log('Base de datos sincronizada');
            })
            .catch((error) => {
                console.error('Error al sincronizar la base de datos:', error);
            });
    }

    middlewares() {
        this.app.use(cors()); 
        this.app.use(bodyParser.json()); 
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }

    routes() {
        this.app.use("/api/users/", AllRoutes.UsersRoute.router);
    }
}
