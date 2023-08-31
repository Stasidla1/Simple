import { StatusValue, UpdateDataType } from "../../Redux/ProfileReducer";
import { instance, ProfileGetUserResponse, ResponseType } from "./API"




type ProfilePutPhoto = {
   small: string
   large: string
}

export const ProfileAPI = {
   async getUser(userId: number | null) {
      const response = await instance.get<ProfileGetUserResponse>('profile/' + userId);
      return response.data;
   },
   async getStatus(userId: number | null) {
      const response = await instance.get<string>('profile/status/' + userId)
      return response.data
   },
   async putData(profile: UpdateDataType) {
      const response = await instance.put<ResponseType>('profile', profile)
      return response
   },
   async putStatus(status: StatusValue) {
      const response = await instance.put<ResponseType>('profile/status', { status })
      return response
   },
   async putPhoto(photo: any) {
      const formData = new FormData();
      formData.append('image', photo)
      const response = await instance.put<ResponseType<ProfilePutPhoto>>('profile/photo', formData, {
         headers: {
            'Content-Type': 'multipart/form-data'
         }
      })
      return response
   }
}
