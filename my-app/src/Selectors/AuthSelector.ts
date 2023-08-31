import { StoreReducers } from "../Redux/ReduxStore";

export const getAuth = (state: StoreReducers) => {
   return state.Auth.Auth
}

export const getMeHeader = (state: StoreReducers) => {
   return state.Auth.Me
}

export const getIsLoadHeader = (state: StoreReducers) => {
   return state.Auth.isLoad
}

