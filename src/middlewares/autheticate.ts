import { Request, Response, NextFunction } from "express";

export default {
    treiner: (req: Request, res: Response, next: NextFunction) => {
        const authorization: string | undefined = req.headers["authorization"];
        const authentication: string | undefined = req.headers["www-authenticate"];

        if (!Boolean(authentication)) {
            return res.status(401).json({
                error: true,
                message: "Falha na autenticação.",
                errorDetails: { "pt-BR": "Forneça uma chave para realizar a autenticação.", "en": "Provide a key to perform authentication." }
            });
        }
        if (!Boolean(authorization)) {
            return res.status(401).json({
                error: true,
                message: "Falha na autorização.",
                errorDetails: { "pt-BR": "Forneça uma chave para autorização.", "en": "Provide a key to perform authorization." }
            });
        }


    }
};