import { TRoutes } from "./routes.types";

const routes: TRoutes[] = [
    {
        path: "/th",
        method: "get",
        callback: (req: any, res: any): any => { res.send("ok") }
    }
];

export default routes;