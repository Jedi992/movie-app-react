import userModel from "../models/user-model.ts"
import bcrypt from "bcrypt"
import tokenService from "./token-service.ts"
import ApiError from "../error/api-error.ts"

const registration = async (email: string,username: string,password: string) => {
    
    const verifyEmail = await userModel.findOne({email})
    const verifyUsername = await userModel.findOne({username})
    
    if(verifyEmail) {
       throw ApiError.BadRequest(`этот email уже занят ${email}`)
        
        
    }
    if(verifyUsername) {
        throw ApiError.BadRequest(`этот username уже занят ${username}`)
    }
    
    const hashPassword = await bcrypt.hash(password, 3)
    const user = await userModel.create({email, username, password: hashPassword})
    
    const token = tokenService.tokenGenerate({
        id: user._id, 
        email: email
    })
    const dtoId: string = user.id
    await tokenService.saveToken(dtoId, token.refreshToken)
    return {...token,  user: {email, username, password: hashPassword}, }
}

const login = async(email: string, password: string) => {
    const user = await userModel.findOne({email})
    if(!user) {
        throw ApiError.BadRequest(`этого email ${email} не существует`)    
    }

    const isValid = await bcrypt.compare(password, user.password) 
    if(!isValid) {
     throw ApiError.BadRequest(`неправильный пароль`)
       
    }

    const token = tokenService.tokenGenerate({
        id: user._id,
        email: email 
    })
     const dtoId = user.id
    await tokenService.saveToken(dtoId, token.refreshToken)
    return {...token,  user: {email}, }
}

export const logout = async(refreshToken: string) => {
    const token = await tokenService.removeToken(refreshToken)
    return token
}

export const profile = async(token) => {
    const decoded = tokenService.decodedToken(token)
    const id = decoded.id
    const profile = await userModel.findOne({_id: id})
    console.log(profile)
    return profile
}

export default {
  registration,
  login,
  logout,
  profile
};