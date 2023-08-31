import { StoreReducers } from "../Redux/ReduxStore"

export const getUsers = (state: StoreReducers) => {
   return state.DialogsPage.Users
}
export const getEnterMessage = (state: StoreReducers) => {
   return state.DialogsPage.EnterMessage
}
export const getAnswerMessage = (state: StoreReducers) => {
   return state.DialogsPage.AnswerMessage
}