
type TRoutes = {
    path: string,
    method: "post" | "get" | "put" | "delete" | "path",
    callback: any,
};

const routes: TRoutes[] = [
    {
        path: "/th",
        method: "get",
        callback: (req: any, res: any): any => { res.send("ok") }
    }
];

export default routes;