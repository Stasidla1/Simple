import { instance, PutData, ResponseType } from "./API"

type AuthMeResponse = {
   id: number
   email: string
   login: string
}


type AuthAuthLogin = {
   id: number
}

export const AuthAPI = {
   async getAuth() {
      const response = await instance.get<ResponseType<AuthMeResponse>>('auth/me')
      return response
   },
   async postAuth(email: string, password: string, rememberMe: boolean) {
      const response = await instance.post<ResponseType<AuthAuthLogin>>('auth/login', { email, password, rememberMe })
      return response
   },
   async deleteAuth() {
      const response = await instance.delete<ResponseType>('auth/login')
      return response
   }
}


