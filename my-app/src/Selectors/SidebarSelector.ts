import { StoreReducers } from "../Redux/ReduxStore";

export const getSidebar = (state: StoreReducers) => {
   return state.Sidebar.Sidebar
}