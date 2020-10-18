import jwt from 'jsonwebtoken'
import express, { Request, Response, NextFunction} from 'express'


export const verify = (req: any, res: Response, next: NextFunction) => {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({"msg": "User is not logged in!"})

    try {
        const verified = jwt.verify(token, `${process.env.TOKEN_SECRET}`)
        req.user = verified
        next()
    } catch (error) {
        res.json(400).json({"msg": "Something went wrong!"})
    }
}