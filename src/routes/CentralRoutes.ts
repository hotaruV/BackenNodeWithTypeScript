import routeEntregas from "./entregas.route";
import routeUser from "./user.route";



export const AllRoutes = {
    UsersRoute: new routeUser(),
    EntregasRoute: new routeEntregas(),
};