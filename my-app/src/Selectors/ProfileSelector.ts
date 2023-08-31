import { StoreReducers } from "../Redux/ReduxStore";

export const getProfileUser = (state: StoreReducers) => {
   return state.ProfilePage.User
}

export const getProfileComment = (state: StoreReducers) => {
   return state.ProfilePage.Comment
}

export const getProfileLoad = (state: StoreReducers) => {
   return state.ProfilePage.load
}

export const getProfileStatus = (state: StoreReducers) => {
   return state.ProfilePage.status
}
