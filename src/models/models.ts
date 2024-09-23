import UserModel from "../models/users.model";
import EntregasModel from "./entregas.models";

export const Models = {
    User: new UserModel(),
    Entregas: new EntregasModel
}