import { StoreReducers } from "../Redux/ReduxStore";

export const getUserFriends = (state: StoreReducers) => {
   return state.FriendsPage.User
}
export const getPageSize = (state: StoreReducers) => {
   return state.FriendsPage.PageSize
}
export const getCurrentPage = (state: StoreReducers) => {
   return state.FriendsPage.CurrentPage
}
export const getTotalCount = (state: StoreReducers) => {
   return state.FriendsPage.TotalCount
}
export const getIsLoad = (state: StoreReducers) => {
   return state.FriendsPage.isLoad
}
export const getFollowed = (state: StoreReducers) => {
   return state.FriendsPage.Followed
}
export const getSearchUser = (state: StoreReducers) => {
   return state.FriendsPage.FilterUser.term
}
export const getFollowedFriends = (state: StoreReducers) => {
   return state.FriendsPage.FilterUser.friend
}
