import express from "express";
import routes from "./config/routes";

const App = express.application;
const port: string | number = process.env?.PORT || 3000;
const version: string = process.env.API_VERSION || "v1";

(global as any).isRequired = (paramName: string | null = null) => { throw new Error(`${paramName || "One or more params"} is required`) };

App.use(express.json({ limit: "10mb" }));
App.disable('x-powered-by');

routes.map((i) => App[i.method](`/${version}/${i.path}/`, i.callback));

App.use((req: express.Request, res: express.Response) => {
    res.status(404).json({
        error: true,
        message: "Não encontrado.",
        errorDetails: {
            "pt-BR": "O serviço solicitado não foi encontrado ou está indisponível",
            "en": "The requested service is unavailable."
        },
    });
});

App.listen(port, (): void => console.log(`App listen on ${port}`));