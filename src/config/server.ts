import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";
import morganbody from "morgan-body";
import path from "path";
import fs from "fs";
import moment from "moment";
import bodyParser from "body-parser";
import connectDB from './db'; 
import routeUser from "../routes/user.route";

export default class Server {
    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || "3000";
        this.ServerInit();
        this.ConnectionSQL(); // Conectar a la base de datos
        this.middlewares();   // Configurar middlewares
        this.routes();        // Definir rutas
    }

   
    ServerInit() {
        this.app.listen(this.port, () => {
            console.log("Escuchando en el puerto:", this.port);
        });
    }

    // Configuración de la conexión SQL (considera usar async/await si es asíncrona)
    async ConnectionSQL() {
        try {
            const sql = new connectDB();
            console.log("Conexión a la base de datos establecida");
        } catch (error) {
            console.error("Error al conectar con la base de datos", error);
        }
    }

    // Configuración de Morgan y Morgan-body para logs
    morganInit() {
        // Solo registra solicitudes con errores (status >= 400)
        this.app.use(
            morgan("dev", {
                skip: (req, res) => res.statusCode < 400,
            })
        );

        // Escribir logs en archivo
        const logs = fs.createWriteStream(
            path.join(
                __dirname,
                "../logs",
                `apilogs_${moment().format("YYYY-MM-DD")}.log`
            ),
            { flags: "a" } // Agregar al archivo sin sobrescribir
        );

        // Registro detallado de los cuerpos de las solicitudes
        morganbody(this.app, {
            noColors: true, // Sin colores para mejor legibilidad en archivos
            stream: logs,   // Stream hacia el archivo de logs
        });
    }

    // Definir middlewares
    middlewares() {
        this.app.use(cors()); 
        this.app.use(bodyParser.json()); 
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }

   
    routes() {
        this.app.use("/api/users/", new routeUser().router);
    }
}
