import { ThunkAction } from 'redux-thunk';
import { MessageType, UsersDataType } from "../Type/Types"
import { InferActionType, StoreReducers } from "./ReduxStore"




export type InitialStateType = {
   Users: Array<UsersDataType>
   EnterMessage: Array<MessageType>
   AnswerMessage: Array<MessageType>
}

let initialState: InitialStateType = {
   Users: [
      { key: 1, name: "Vlad", photo: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/chipmunk-nature-photos-1537973822.jpg' },
      { key: 2, name: "Natan", photo: 'https://images.pexels.com/photos/2213575/pexels-photo-2213575.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
      { key: 3, name: "Danik", photo: 'https://i.insider.com/5c79a8cfeb3ce837863155f5?width=1000&format=jpeg&auto=webp' },
      { key: 4, name: "Sasha", photo: 'https://hips.hearstapps.com/rbk.h-cdn.co/assets/17/35/1504106954-monkey.jpg' },
      { key: 5, name: "Vika", photo: 'https://media.npr.org/assets/img/2022/12/09/meerkat-654245859650e9e9185bf2fcb69267343c4f538b-s1100-c50.jpg' },
   ],
   EnterMessage: [
      { key: 1, text: 'Hello' },
      { key: 2, text: 'HeHeHeHeHeHe' },
      { key: 3, text: 'BeBeBEbE' },
   ],
   AnswerMessage: [
      { key: 1, text: 'Whats up' },
      { key: 2, text: 'LaLaLaLaLaLaLa' },
      { key: 3, text: 'Kucoin Alpha Beta' },
   ]
}

let DialogsReducer = (state = initialState, action: DialogsType): InitialStateType => {
   switch (action.type) {
      case "ADD_MESSAGE":
         return {
            ...state,
            AnswerMessage: [...state.AnswerMessage, { key: 4, text: action.message }]
         }
      default: return state
   }
}

type ThunkType = ThunkAction<Promise<void>, StoreReducers, unknown, DialogsType>

export type DialogsType = InferActionType<typeof DialogsAction>

export const DialogsAction = {
   AddMessageSuccess: (message: string) => {
      return { type: "ADD_MESSAGE", message } as const
   }

}

export const AddMessage = (message: string): ThunkType => {
   return async (dispatch) => {
      dispatch(DialogsAction.AddMessageSuccess(message))
   }
}


export default DialogsReducer