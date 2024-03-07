import jwt from 'jsonwebtoken'
import { NextFunction, Request, Response } from 'express';


function auth (req: Request, res: Response, next: NextFunction) {
    const token = req.header("x-auth-token") || " "
    const publicKey: any = process.env.JWT_SECRET

    if(!token) return res.status(401).send("Token not found");

    try {
        const user = jwt.verify(token, publicKey)
        req.user = user;
        next()
    } catch (error) {
        res.status(400).send("Invalid Token")
    }
}

export default auth