import { Sequelize } from "sequelize";

export default class connectDB {
    public confSQL = {
        dialect: process.env.DIALECT as string,
        host: process.env.HOST as string,
        username: process.env.USER as string,
        password: process.env.PASS as string,
        database: process.env.DATABASE as string,
    };

    private sequelize: Sequelize;

    constructor() {
        this.sequelize = new Sequelize(this.confSQL.database, this.confSQL.username, this.confSQL.password, {
            host: this.confSQL.host,
            dialect: 'mysql',
            logging: false, 
        });
        this.dbConnect();
    }

    async dbConnect() {
        try {
            await this.sequelize.authenticate();
            //console.log("Conexión a la base de datos establecida con éxito");
        } catch (error) {
            console.error("Error en la conexión a la base de datos:", error);
        }
    }

    public getInstance(): Sequelize {
        return this.sequelize;
    }
}
