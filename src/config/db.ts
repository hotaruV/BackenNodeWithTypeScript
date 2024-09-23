import { Sequelize } from 'sequelize';

export default class connectDB {
    private static instance: connectDB;
    private sequelize: Sequelize;

    public confSQL = {
        dialect: process.env.DIALECT || 'mysql',
        host: process.env.HOST || 'localhost',
        username: process.env.USER || 'root',
        password: process.env.PASS || '',
        database: process.env.DATABASE || 'jrdinnova'
    };
    
    private constructor() {
        this.sequelize = new Sequelize(this.confSQL.database, this.confSQL.username, this.confSQL.password, {
            host: this.confSQL.host,
            dialect: 'mysql',
            logging: false,
        });
        
        this.dbConnect();
    }

    public static getInstance(): connectDB {
        if (!connectDB.instance) {
            connectDB.instance = new connectDB();
        }
        return connectDB.instance;
    }

    async dbConnect() {
        try {
            await this.sequelize.authenticate();
            console.log("Conexión a la base de datos establecida.");
        } catch (error) {
            console.error("Error en la conexión a la base de datos:", error);
        }
    }

    getInstance() {
        return this.sequelize;
    }
}
