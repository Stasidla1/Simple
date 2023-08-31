import { ProfileAPI } from '../Components/API/ProfileApi';
import { InferActionType, StoreReducers } from './ReduxStore';
import { ThunkAction } from 'redux-thunk';
import { UpdateMe } from "./AuthReducer"
import { CommentData, UserData, UserDataContact } from "../Type/Types"
import { ResultCodeEnum } from '../Components/API/API';


export type InitialStateType = {
   User: UserData
   Comment: Array<CommentData>
   status: string
   load: boolean
}

let initialState: InitialStateType = {
   User: {
      userId: null,
      lookingForAJob: true,
      lookingForAJobDescription: '',
      fullName: '',
      contacts: {
         github: null,
         vk: null,
         facebook: null,
         instagram: null,
         twitter: null,
         website: null,
         youtube: null,
         mainLink: null,
      },
      photos: {
         small: null,
         large: null,
      },
      aboutMe: '',
   },
   Comment: [
      { key: 1, text: "BEBEBEBE", photo: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/chipmunk-nature-photos-1537973822.jpg', likeCount: 112 },
      { key: 2, text: "CECECECE", photo: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/chipmunk-nature-photos-1537973822.jpg', likeCount: 13 },
      { key: 3, text: "PEPEPEPE", photo: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/chipmunk-nature-photos-1537973822.jpg', likeCount: 15 },
   ],
   status: '',
   load: false,
}

let ProfileReducer = (state = initialState, action: ProfileType): InitialStateType => {
   switch (action.type) {
      case "SET_USER":
         return {
            ...state,
            User: action.user
         }
      case "SET_STATUS":
         return {
            ...state,
            status: action.status
         }
      case "CHANGE_LOAD":
         return {
            ...state,
            load: action.bool,
         }
      case "ADD_COMMENT":
         let comment = {
            key: 4,
            text: action.text,
            photo: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/chipmunk-nature-photos-1537973822.jpg',
            likeCount: 1,
         }
         return {
            ...state,
            Comment: [...state.Comment, comment]
         }
      default: return state
   }
}

export type ProfileType = InferActionType<typeof ProfileAction>
type ThunkType = ThunkAction<Promise<void>, StoreReducers, unknown, ProfileType>

export const ProfileAction = {
   GetUserSuccess: (user: UserData) => {
      return { type: "SET_USER", user } as const
   },
   GetStatusSuccess: (status: string) => {
      return { type: "SET_STATUS", status } as const
   },
   ChangeLoad: (bool: boolean) => {
      return { type: "CHANGE_LOAD", bool } as const
   },
   AddComment: (text: string) => {
      return { type: "ADD_COMMENT", text } as const
   },
}



export const GetStatus = (userId: number | null): ThunkType => {
   return async (dispatch) => {
      let data = await ProfileAPI.getStatus(userId);
      dispatch(ProfileAction.GetStatusSuccess(data))
   }
}
export type StatusValue = {
   status: string
}
export type UpdateDataType = {
   userId: number | null
   lookingForAJob: boolean
   lookingForAJobDescription: string
   fullName: string
   contacts: UserDataContact
   aboutMe: string
}

export const AddCommentThunk = (message: string): ThunkType => {
   return async (dispatch) => {
      dispatch(ProfileAction.AddComment(message))
   }
}

export const UpdateData = (profile: UpdateDataType, id: number | null, status: StatusValue): ThunkType => {
   return async (dispatch) => {
      let response = await ProfileAPI.putData(profile)
      let newStatus = await ProfileAPI.putStatus(status)
      if (response.data.resultCode === ResultCodeEnum.Success && newStatus.data.resultCode === ResultCodeEnum.Success) {
         dispatch(GetUser(id))
         dispatch(GetStatus(id))
      }
   }
}

export const GetUser = (userId: number | null): ThunkType => {
   return async (dispatch) => {
      dispatch(ProfileAction.ChangeLoad(false))
      let data = await ProfileAPI.getUser(userId)
      dispatch(ProfileAction.GetUserSuccess(data))
      dispatch(ProfileAction.ChangeLoad(true))
   }
}


export const UpdatePhoto = (photo: File, id: number | null): ThunkType => {
   return async (dispatch) => {
      let response = await ProfileAPI.putPhoto(photo)
      if (response.data.resultCode === ResultCodeEnum.Success) {
         dispatch(GetUser(id))
         dispatch(UpdateMe(id))
      }
   }
}

export default ProfileReducer