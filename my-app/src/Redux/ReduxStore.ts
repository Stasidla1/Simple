import { applyMiddleware, combineReducers, compose } from 'redux'
import { legacy_createStore as createStore } from 'redux'
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import AuthReducer from './AuthReducer';
import DialogsReducer from './DialogsReducer';
import FriendsReducer from './FriendsReducer';
import ProfileReducer from './ProfileReducer';
import SidebarReducer from './SidebarReducer';


let rootReducers = combineReducers({
   Sidebar: SidebarReducer,
   DialogsPage: DialogsReducer,
   ProfilePage: ProfileReducer,
   FriendsPage: FriendsReducer,
   Auth: AuthReducer,
   form: formReducer,
})

type RootReducers = typeof rootReducers
export type StoreReducers = ReturnType<RootReducers>

export type InferActionType<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(rootReducers, composeEnhancers(
   applyMiddleware(thunk)
))

export type AppDispatch = typeof store.dispatch

export default store