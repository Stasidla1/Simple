import { AuthAPI } from '../Components/API/AuthApi';
import { HeaderAPI } from '../Components/API/HeaderApi';
import { StoreReducers, InferActionType } from './ReduxStore';
import { ThunkAction } from "redux-thunk"
import { UserData } from "../Type/Types"
import { ResultCodeEnum } from '../Components/API/API';


export type AuthType = {
   id: null | number,
   email: null | string,
   login: null | string,
}

export type InitialStateType = {
   Auth: AuthType,
   isLoad: boolean,
   Me: UserData
}


let initialState: InitialStateType = {
   Auth: {
      id: null,
      email: null,
      login: null,
   },
   Me: {
      userId: 0,
      lookingForAJob: false,
      lookingForAJobDescription: 'w',
      fullName: 'w',
      photos: {
         large: '',
         small: ''
      },
      contacts: {
         github: null,
         vk: null,
         facebook: null,
         instagram: null,
         twitter: null,
         website: null,
         youtube: null,
         mainLink: null,
      }
   },
   isLoad: false,
}


let AuthReducer = (state = initialState, action: ActionTypes): InitialStateType => {
   switch (action.type) {
      case 'SET_AUTH': {
         return {
            ...state,
            Auth: { ...action.auth },
            isLoad: true
         }
      }
      case 'GET_ME': {
         return {
            ...state,
            Me: action.data,
         }
      }
      case 'IS_LOAD': {
         return {
            ...state,
            isLoad: true
         }
      }

      default: return state
   }
}

type ThunkType = ThunkAction<Promise<void>, StoreReducers, unknown, ActionTypes>

type ActionTypes = InferActionType<typeof AuthAction>

export const AuthAction = {
   GetAuthSuccess: (id: null | number, email: string | null, login: string | null) => {
      return { type: 'SET_AUTH', auth: { id, email, login } } as const
   },
   GetMeSuccess: (data: UserData) => {
      return { type: 'GET_ME', data } as const
   },
   ChangeIsLoad: () => {
      return { type: 'IS_LOAD' } as const
   }
}

export const Logout = (): ThunkType => {
   return async (dispatch) => {
      let response = await AuthAPI.deleteAuth()
      if (response.data.resultCode === ResultCodeEnum.Success) {
         dispatch(AuthAction.GetAuthSuccess(null, null, null))
      }
   }
}


export const UpdateMe = (id: number | null): ThunkType => {
   return async (dispatch) => {
      let response = await HeaderAPI.getUser(id);
      dispatch(AuthAction.GetMeSuccess(response))
   }
}



export const AddMe = (email: string, password: string, rememberMe: boolean): ThunkType => {
   return async (dispatch) => {
      const response = await AuthAPI.postAuth(email, password, rememberMe)
      if (response.data.resultCode === ResultCodeEnum.Success) {
         dispatch(GetAuth())
      }
   }
}



type Success = {
   id: null | number
   email: null | string
   login: null | string
}


export const GetAuth = (): ThunkType => {
   return async (dispatch) => {
      const response = await AuthAPI.getAuth();
      if (response.data.resultCode === ResultCodeEnum.Success) {
         const data = await HeaderAPI.getUser(response.data.data.id)
         const { id, email, login }: Success = response.data.data
         dispatch(AuthAction.GetAuthSuccess(id, email, login))
         dispatch(AuthAction.GetMeSuccess(data))
      }
      dispatch(AuthAction.ChangeIsLoad())
   }
}


export default AuthReducer