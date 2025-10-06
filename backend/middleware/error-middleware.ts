import ApiError from "../error/api-error.ts"
import type { Request, Response,NextFunction,ErrorRequestHandler } from "express";

const errorHandler = (err: any,req:Request,res:Response,next:NextFunction) => {
    console.log(err)
    if(err instanceof ApiError) {
        return res.status(err.status).json({message: err.message, errors: err.errors})
    }
        return res.status(err.status || 500).json({
            message: err.message || "непредвиденная ошибка"
        })
}




export default errorHandler