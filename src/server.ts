import express from "express";
import routes from "./config/routes";

const App = express.application;
const port: string | number = process.env?.PORT || 3000;
const version: string = process.env.API_VERSION || "v1";

App.use(express.json());

routes.map((i) => App[i.method](`/${version}/${i.path}/`, i.callback));

App.listen(port || 3000, (): void => console.log(`App listen on ${port}`));