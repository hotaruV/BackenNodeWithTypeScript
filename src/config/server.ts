import express, { Application } from "express";
import cors from "cors";
import connectDB from './db'; 
import { AllRoutes } from "../routes/CentralRoutes";

export default class Server {
    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || "3000";
        this.middlewares();
        this.routes();      
        this.ServerInit();  
    }

    ServerInit() {
        this.app.listen(this.port, () => {
            console.log("Escuchando en el puerto:", this.port);
        });
        
        const db = connectDB.getInstance(); // Usa el método estático para obtener la instancia
        db.getInstance().authenticate() 
            .then(() => {
                //console.log('Conexión a la base de datos establecida.');
            })
            .catch((error) => {
                console.error('Error en la conexión a la base de datos:', error);
            });
    }

    middlewares() {
        this.app.use(cors()); 
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    routes() {
        this.app.use("/api/users/", AllRoutes.UsersRoute.router);
        this.app.use("/api/entregas/", AllRoutes.EntregasRoute.router);
    }
}
