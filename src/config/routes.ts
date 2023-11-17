type routes = {
    path: string,
    method: "post" | "get" | "put" | "delete" | "path",
    callback: any,
};

const routes: routes[] = [
    {
        path: "/th",
        method: "get",
        callback: (req: any, res: any): any => { res.send("ok") }
    }
];

export default routes;