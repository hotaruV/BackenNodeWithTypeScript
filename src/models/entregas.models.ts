import { Sequelize } from "sequelize";
import connectDB from "../config/db";

class EntregasModel {

    private sequelize: Sequelize;

    constructor() {
        const dbInstance = connectDB.getInstance();
        this.sequelize = dbInstance.getInstance();
    }

    async EmpleadosAll(id: string) {
        try {
            const consulta = `
                    select usuario.id_usuario id_empleado, concat(empleado.nombre,' ',empleado.apaterno,' ',empleado.amaterno) empleado
                    from  tg_usuario AS usuario 
                    INNER JOIN tg_empleado AS empleado ON (usuario.tg_empleado_id = empleado.id_empleado) 
                    order by empleado.apaterno asc
            `;
            const [results] = await this.sequelize.query(consulta);
            return results;
        } catch (error) {
            console.error("Error al obtener los usuarios:", error);
            throw error;
        }
    }

    async subProcesos(entrega: string){
        try {
            const consulta: string = `
                    SELECT ote.ot_entrega_id, ote.f_inicia, ote.f_finaliza, ote.seguimiento, 
                    ote.id_responsable ,ote.f_real_ent, ote.tipo, ote.status, ote.plan_gen, 
                    ote.tps_subproceso_id, sp.nombre AS subproceso, DATEDIFF(ote.f_real_ent, ote.f_finaliza) AS desviacion
                    FROM ot_planeacion_entrega ote 
                    INNER JOIN tps_subproceso sp ON sp.id_subproceso = ote.tps_subproceso_id
                    inner JOIN tps_proceso p ON sp.tps_proceso_id = p.id_proceso
                    WHERE ote.ot_entrega_id = ${entrega}
                    and tps_proceso_id = 14
            `
            const [results] = await this.sequelize.query(consulta);
            return results;
        } catch (error) {
            
        }
    }


}
export default EntregasModel;