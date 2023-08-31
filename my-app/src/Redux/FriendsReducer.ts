import { ResultCodeEnum } from '../Components/API/API';
import { FriendAPI } from '../Components/API/FriendsApi';
import { ThunkAction } from 'redux-thunk';
import { InferActionType, StoreReducers } from './ReduxStore';
import { FriendsData } from "../Type/Types";



export type InitialStateType = {
   User: Array<FriendsData>
   PageSize: number
   CurrentPage: number
   TotalCount: number
   isLoad: boolean
   Followed: Array<number>
   FilterUser: FilterUserType
}

let initialState: InitialStateType = {
   User: [],
   PageSize: 7,
   CurrentPage: 1,
   TotalCount: 1,
   isLoad: false,
   Followed: [],
   FilterUser: {
      term: '',
      friend: null
   }
}


let FriendsReducer = (state = initialState, action: FriendsType): InitialStateType => {
   switch (action.type) {
      case 'ADD_USERS':
         return {
            ...state,
            User: action.user
         }
      case 'CHANGE_CURRENT_PAGE':
         return {
            ...state,
            CurrentPage: action.page
         }
      case 'SET_TOTAL_COUNT':
         return {
            ...state,
            TotalCount: action.count
         }
      case 'CHANGE_LOAD':
         return {
            ...state,
            isLoad: true
         }
      case 'FOLLOW':
         return {
            ...state,
            User: state.User.map(u => {
               if (u.id === action.userId) {
                  return { ...u, followed: true }
               } return u
            })
         }
      case 'UN_FOLLOW':
         return {
            ...state,
            User: state.User.map(u => {
               if (u.id === action.userId) {
                  return { ...u, followed: false }
               } return u
            })
         }
      case 'FOLLOWED':
         return {
            ...state,
            Followed: action.bool ?
               [...state.Followed, action.userId] :
               state.Followed.filter(u => u !== action.userId)
         }
      case 'CHANGED_FILTER_FRIENDS':
         return {
            ...state,
            FilterUser: action.payload
         }
      default: return state
   }
}

type FriendsType = InferActionType<typeof FriendsAction>

type ThunkType = ThunkAction<Promise<void>, StoreReducers, unknown, FriendsType>

export const FriendsAction = {
   AddUsersSuccess: (user: Array<FriendsData>) => {
      return { type: 'ADD_USERS', user } as const
   },
   ChangeCurrentPageSuccess: (page: number) => {
      return { type: 'CHANGE_CURRENT_PAGE', page } as const
   },
   SetTotalCountSuccess: (count: number) => {
      return { type: 'SET_TOTAL_COUNT', count } as const
   },
   ChangeLoadSuccess: () => {
      return { type: 'CHANGE_LOAD' } as const
   },
   FollowSuccess: (userId: number) => {
      return { type: 'FOLLOW', userId } as const
   },
   UnFollowSuccess: (userId: number) => {
      return { type: 'UN_FOLLOW', userId } as const
   },
   FollowInProccess: (userId: number, bool: boolean) => {
      return { type: 'FOLLOWED', userId, bool } as const
   },
   ChangedFilterFriends: (term: string, friend: null | boolean) => {
      return { type: 'CHANGED_FILTER_FRIENDS', payload: { term, friend } } as const
   }
}


export const AddUsers = (count: number, page: number, term: string, friend: null | boolean): ThunkType => {
   return async (dispatch) => {
      const response = await FriendAPI.getFriends(count, page, term, friend);
      dispatch(FriendsAction.AddUsersSuccess(response.data.items))
      dispatch(FriendsAction.SetTotalCountSuccess(response.data.totalCount))
      dispatch(FriendsAction.ChangedFilterFriends(term, friend))
      dispatch(FriendsAction.ChangeCurrentPageSuccess(page))
      dispatch(FriendsAction.ChangeLoadSuccess())
   }
}

export const SubscribeUser = (userId: number): ThunkType => {
   return async (dispatch) => {
      dispatch(FriendsAction.FollowInProccess(userId, true))
      const response = await FriendAPI.addFriends(userId)
      if (response.data.resultCode === ResultCodeEnum.Success) {
         dispatch(FriendsAction.FollowSuccess(userId))
         dispatch(FriendsAction.FollowInProccess(userId, false))
      }
   }
}
export const DeleteUser = (userId: number): ThunkType => {
   return async (dispatch) => {
      dispatch(FriendsAction.FollowInProccess(userId, true))
      const response = await FriendAPI.deleteFriends(userId)
      if (response.data.resultCode === ResultCodeEnum.Success) {
         dispatch(FriendsAction.UnFollowSuccess(userId))
         dispatch(FriendsAction.FollowInProccess(userId, false))
      }
   }
}

export type FilterUserType = {
   term: string
   friend: null | boolean
}

export default FriendsReducer