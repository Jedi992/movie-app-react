import jwt from "jsonwebtoken"
import tokenModel from "../models/token-model.ts"

export const tokenGenerate = (payload) => {
   const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: "30m"} )
   const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: "30d"} )
    return {
        accessToken,
        refreshToken
    }
}

export const saveToken = async (userId: string, refreshToken: string) => {
    const tokenData = await tokenModel.findOne({user: userId})
    if(tokenData) {
        tokenData.refreshToken = refreshToken
        return tokenData.save()
    }
    const token = await tokenModel.create({user: userId, refreshToken})
    return token
}

export const removeToken = async(refreshToken: string) => {
    const tokenData = await tokenModel.deleteOne({refreshToken}) 
    return tokenData
} 

export const validateTokenAccess = (accessToken: string) => {
    try {
    const userData = jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET)
    return userData
    } catch(error) {
        console.log(error)
        return null
    }
    
}
export const validateTokenRefresh = (refreshToken: string) => {
    try {
    const userData = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET)
    return userData
    } catch(error) {
        return error
    }
    
}

export const findToken = async (refreshToken: string) => {
  const tokenData = await tokenModel.findOne({ refreshToken });
  return tokenData;
};

export const decodedToken = (token:string) => {
    const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
    return decoded
}

export default {
    tokenGenerate,
    saveToken,
    removeToken,
    validateTokenAccess,
    validateTokenRefresh,
    decodedToken,
    findToken
}