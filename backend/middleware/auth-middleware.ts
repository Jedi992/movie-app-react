import tokenService from "../service/token-service.ts"
import ApiError from "../error/api-error.ts"
import type { Request, Response,NextFunction } from "express";

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    try{
    const authorizationHeader = req.headers.authorization
    if(!authorizationHeader) {
        return next(ApiError.Unauthorized())
    } 
    const token = authorizationHeader.split(" ")[1]
    if(!token) { 
        return next(ApiError.Unauthorized())
    } 
    
    const userData = tokenService.validateTokenAccess(token)
    console.log(userData)
    if(!userData) { 
        return next(ApiError.Unauthorized())
    }
    req.user = userData;
    next()
    } catch(error) {
        next(error)
    }
}

export default authMiddleware