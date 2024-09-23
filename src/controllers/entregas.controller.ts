import { Models } from '../models/models';
import { Request, Response } from "express";




export default class entregasController {
    async getentregas(req: Request, res: Response) {
        const id: string | any = req.query.entrega;
        
        try {
            const empleados = await Models.Entregas.EmpleadosAll(id);
            if(!empleados){
                res.status(400).json({
                    ok: false,
                    msg: "Error en db consultar servicio técnico",
                  });
            }
            res.status(200).json({
                status: 'success',
                empleados
              });
            

        } catch (error) {
            
        }
    }

    async getProcesos(req: Request, res: Response) {
        const id : any = req.query.entrega;
        //console.log(id);
        try {
            const subprocesos = await Models.Entregas.subProcesos(id);
            if(!subprocesos){
                res.status(400).json({
                    status: 'success',
                    msg: "Error en db consultar servicio técnico",
                  });
            }
            res.status(200).json({
                status: 'success',
                subprocesos
              });
            

        } catch (error) {
            
        }
    }



    
}