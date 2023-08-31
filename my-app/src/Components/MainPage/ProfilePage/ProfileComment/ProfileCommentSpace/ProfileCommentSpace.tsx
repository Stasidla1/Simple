import { Button } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { InjectedFormProps, reduxForm } from "redux-form";
import { AddCommentThunk } from "../../../../../Redux/ProfileReducer";
import { AppDispatch } from "../../../../../Redux/ReduxStore";
import { CreateField } from "../../../../../SupportFunction/CreateField/CreateField";
import './ProfileCommentSpace.css'

let ProfileCommentField: React.FC<InjectedFormProps<ProfileFormData>> = (props) => {
   return (
      <div className="ProfileCommentField">
         <form onSubmit={props.handleSubmit}>
            {CreateField<ProfileTextArea>('textarea', 'textarea', undefined, 'Write your comment')}
            <Button type="primary" size='small'>Send</Button>
         </form>
      </div>
   )
}

let ProfileCommentForm = reduxForm<ProfileFormData>({ form: 'ProfileComment' })(ProfileCommentField)

export type ProfileFormData = {
   textarea: string
}

export type ProfileTextArea = keyof ProfileFormData

let ProfileCommentSpace: React.FC = (props) => {
   const dispatch: AppDispatch = useDispatch()

   let onSubmit = (p: ProfileFormData) => {
      dispatch(AddCommentThunk(p.textarea))
   }
   return (
      <ProfileCommentForm {...props} onSubmit={onSubmit} />
   )
}

export default ProfileCommentSpace