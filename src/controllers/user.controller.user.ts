import { Models } from './../models/models';
import { Request, Response } from "express";




export default class userController {
    async getUsers(req: Request, res: Response) {
        const id: string | any = req.query.id;
        try {
            const users = await Models.User.getAllUsers(id);
            if(!users){
                res.status(400).json({
                    ok: false,
                    msg: "Error en db consultar servicio técnico",
                  });
            }
            res.status(400).json({
                ok: true,
                usuarios: users
              });
            

        } catch (error) {
            
        }
    }

    async getProcesos(req: Request, res: Response) {
        const id: string | any = req.query.id;
        try {
            const users = await Models.User.getAllUsers(id);
            if(!users){
                res.status(400).json({
                    ok: false,
                    msg: "Error en db consultar servicio técnico",
                  });
            }
            res.status(400).json({
                ok: true,
                usuarios: users
              });
            

        } catch (error) {
            
        }
    }



    
}