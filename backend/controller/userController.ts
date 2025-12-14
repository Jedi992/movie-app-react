import type { Request, Response,NextFunction } from "express";
import userService from "../service/user-service.ts"

interface User {
    email: string,
    username: string,
    password: string
}


const registration = async(req: Request,res: Response, next: NextFunction): Promise<void> => {
   try {
    const { email,username, password }:User = req.body
   const userData = await userService.registration(email,username,password)
    res.cookie("refreshToken",userData.refreshToken, {
        maxAge: 38* 24 * 60 * 1000,
        httpOnly: true,
    } )
    res.json(userData)
   } catch (error) {
    next(error)
   }

}

const login = async(req: Request,res:Response,next: NextFunction ): Promise<void> => {
    try {
        const {email, password}: User = req.body
    const userData = await userService.login(email, password)
    res.cookie("refreshToken",userData.refreshToken, {
        maxAge: 38* 24 * 60 * 1000,
        httpOnly: true,
    })
    res.json(userData)
    } catch (error) {
        next(error)
    }
    
}

const logout = async(req: Request,res:Response ): Promise<void> => {
    const {refreshToken} = req.cookies as {refreshToken: string}
    console.log(refreshToken)
    const tokenData = await userService.logout(refreshToken)
    res.clearCookie("refreshToken");
    res.json(tokenData)
}

const profile = async (req: any, res: Response, next: NextFunction) => {
  try {
    const userId = req.user.id;
    const profileData = await userService.getProfileById(userId);
    return res.json(profileData);
  } catch (e) {
    next(e);
  }
};

const refresh = async (req: Request, res: Response, next: NextFunction) => {
  try {

    const refreshToken = (req.cookies as any)?.refreshToken;
    
    const userData = await userService.refresh(refreshToken);

    res.cookie("refreshToken", userData.refreshToken, {
      maxAge: 38*24*60*1000,
      httpOnly: true,
    });

    return res.json(userData);
  } catch (e) {
    next(e);
  }
};

export default {
    registration,
    login,
    logout,
    refresh,
    profile
}