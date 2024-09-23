import { Request, Response } from "express";

export default class userController {
    getIndex(req: Request, res: Response) {
        res.json("Get index functionality");
    }
    createUser(req: Request, res: Response) {
        const { name, email } = req.body;
        res.send(`User created with name: ${name} and email: ${email}`);
    }
}