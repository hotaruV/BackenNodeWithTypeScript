import { Sequelize } from 'sequelize';
import connectDB from '../config/db';

class UserModel {
    private sequelize: Sequelize;

    constructor() {
        const dbInstance = connectDB.getInstance();
        this.sequelize = dbInstance.getInstance();
    }

    async getAllUsers(id: string) {
        try {
            const consulta = `
                SELECT * FROM tps_subproceso AS subproceso 
                WHERE subproceso.tps_proceso_id = ${id};
            `;
            const [results] = await this.sequelize.query(consulta);
            return results;
        } catch (error) {
            console.error("Error al obtener los usuarios:", error);
            throw error;
        }
    }
}

export default UserModel;
