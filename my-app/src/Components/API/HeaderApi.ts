import { instance, ProfileGetUserResponse } from "./API";

export const HeaderAPI = {
   async getUser(userId: number | null) {
      const response = await instance.get<ProfileGetUserResponse>('profile/' + userId);
      return response.data;
   },
}