import axios from "axios";

export const instance = axios.create({
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   withCredentials: true,
   headers: {
      'API-KEY': '608aa219-4d79-40ff-a024-14bbd67e4078'
   }
})

export type ResponseType<D = {}, RC = ResultCodeEnum> = {
   data: D
   resultCode: RC
   messages: Array<string>
}

export enum ResultCodeEnum {
   Success = 0,
   Error = 1,
}

export type PutData = {
   resultCode: number
   messages: Array<string>
   data: object
}
export type ProfileGetUserResponse = {
   userId: number
   lookingForAJob: boolean
   lookingForAJobDescription: string
   fullName: string
   contacts: {
      github: string
      vk: string
      facebook: string
      instagram: string
      twitter: string
      website: string
      youtube: string
      mainLink: string
   }
   photos: {
      small: string
      large: string
   }
}


