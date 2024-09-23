import {Sequelize} from "sequelize";


export default class connectDB {


    public confSQL = {
        dialect: process.env.DIALECT as string,
        host: process.env.HOST as string,
        username: process.env.USER as string,
        password: process.env.PASS as string,
        database: process.env.DATABASE as string,
    };
    
    constructor() {
        this.dbConnect();
    }
   async dbConnect(){
        try {
            const sqlize = new Sequelize(this.confSQL.database, this.confSQL.username, this.confSQL.password, {
                host:  this.confSQL.host,
                dialect: "mysql"
              })
              await sqlize.authenticate();
              //console.log("La conexión a la base de datos SQL se ha realizado con éxito");
        } catch (error) {
            console.error("Error en la conexión a la base de datos SQL:", error);
        }
    }
    
}