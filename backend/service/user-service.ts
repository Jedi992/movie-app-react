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

export const refresh = async (refreshToken: string) => {
    console.log(refreshToken)
    
  if (!refreshToken) throw ApiError.Unauthorized();

  const userData: any = tokenService.validateTokenRefresh(refreshToken);
  
  const tokenFromDb = await tokenService.findToken(refreshToken);

  if (!userData || !tokenFromDb) throw ApiError.Unauthorized();

  const user = await userModel.findById(userData.id);
  if (!user) throw ApiError.Unauthorized();

  const tokens = tokenService.tokenGenerate({ id: user._id, email: user.email });

  await tokenService.saveToken(user.id, tokens.refreshToken);

  return {
    ...tokens,
    user: {
      id: user.id,
      email: user.email,
      username: user.username,
    },
  };
};

export const logout = async(refreshToken: string) => {
    const token = await tokenService.removeToken(refreshToken)
    return token
}

export const getProfileById = async (id: string) => {
  const profile = await userModel.findById(id);
  return profile;
};



export default {
  registration,
  login,
  logout,
  refresh,
  getProfileById
};