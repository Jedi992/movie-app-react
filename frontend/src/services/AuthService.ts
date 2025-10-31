import $api from "../http";
import { AxiosResponse } from "axios";
import { AuthResponse } from "../models/response/AuthResponse";
export default class AuthService {
  static async login(
    email: string,
    password: string,
  ): Promise<AxiosResponse<AuthResponse>> {
    const response = await $api.post<AuthResponse>("/login", { email, password });
    if(response.data.accessToken)
    localStorage.setItem("token", response.data.accessToken);
  return response
  }

  static async registration(
    email: string,
    username: string,
    password: string,
  ): Promise<AxiosResponse<AuthResponse>> {
    const response = await $api.post<AuthResponse>("/registration", { email,username,password });
    if(response.data.accessToken)
    localStorage.setItem("token", response.data.accessToken);
  return response
  }

  static async logout(): Promise<AxiosResponse<AuthResponse>> {
    const response = $api.post<AuthResponse>("/logout");
    localStorage.removeItem("token")
    return response
  }
}
