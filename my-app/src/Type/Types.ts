export type UserDataPhoto = {
   small: string | null
   large: string | null
}

//FriendsPage

export type FriendsData = {
   id: number
   name: string
   status: null | string
   photos: UserDataPhoto
   followed: boolean
}

//MainPage
export type UserDataContact = {
   github: string | null
   vk: string | null
   facebook: string | null
   instagram: string | null
   twitter: string | null
   website: string | null
   youtube: string | null
   mainLink: string | null
}

export type UserData = {
   userId: number | null
   lookingForAJob: boolean
   lookingForAJobDescription: string
   fullName: string
   contacts: UserDataContact
   photos: UserDataPhoto
   aboutMe?: string
}
export type CommentData = {
   key: number
   text: string
   photo: string
   likeCount: number
}

//DialogsPage
export type UsersDataType = {
   key: number,
   name: string,
   photo: string
}

export type MessageType = {
   key: number,
   text: string,
}