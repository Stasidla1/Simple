import { instance, PutData, ResponseType } from "./API"

type FriendsGetFriendsItems = {
   name: string
   id: number
   photos: {
      small: string,
      large: string
   },
   status: string,
   followed: boolean
}
type FriendsGetFriends = {
   items: Array<FriendsGetFriendsItems>
   totalCount: number
   errors: string
}

export const FriendAPI = {
   async getFriends(count: number, page: number, term: string = '', friend: null | boolean = null) {
      const response = await instance.get<FriendsGetFriends>(`users?count=${count}&page=${page}&term=${term}` + (friend ? `&friend=${friend}` : ''))
      return response
   },
   async addFriends(userId: number) {
      const response = await instance.post<PutData>('follow/' + userId)
      return response
   },
   async deleteFriends(userId: number) {
      const response = await instance.delete<ResponseType>('follow/' + userId)
      return response
   }
}
