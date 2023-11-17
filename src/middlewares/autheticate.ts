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
        // JWT CASES
        // aud - A token’s audience or recipient
        // sub - A token’s subject, a unique identifier for whichever programmatic entity is referenced within the token(e.g., a user ID)
        // iss - A token’s issuer ID
        // iat - A token’s “issued at” time stamp
        // nbf - A token’s “not before” time stamp; the token is rendered invalid before said time
        // exp - A token’s “expiration” time stamp; the token is rendered invalid at said time
    }
};