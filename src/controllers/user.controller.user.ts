import { Request, Response } from "express";
import UserService  from '../services/usuarioService'

export default class userController {
    async getUsers(req: Request, res: Response) {
        try {
            const users = await UserService.getAllUsers(); // Llama al servicio para obtener usuarios
            res.json(users); // Devuelve los usuarios como respuesta
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }



    createUser(req: Request, res: Response) {
        
        const { body } = req;

        res.status(200).json({
            ok: true,
            data: body
          });
    }
}