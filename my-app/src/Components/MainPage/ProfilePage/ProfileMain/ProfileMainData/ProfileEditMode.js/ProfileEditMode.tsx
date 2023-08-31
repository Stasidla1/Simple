import { Button } from "antd";
import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { InjectedFormProps, reduxForm } from "redux-form";
import { UpdateData } from "../../../../../../Redux/ProfileReducer";
import { AppDispatch } from "../../../../../../Redux/ReduxStore";
import { getAuth } from "../../../../../../Selectors/AuthSelector";
import { getProfileUser } from "../../../../../../Selectors/ProfileSelector";
import { CreateField } from "../../../../../../SupportFunction/CreateField/CreateField";
import { UserDataContact } from "../../../../../../Type/Types";


let ProfileEditModeField: FC<InjectedFormProps<FormDataType>> = (props) => {
   const User = useSelector(getProfileUser)

   return (
      <div className="ProfileEditMode">
         <form onSubmit={props.handleSubmit}>
            <div>Name: {CreateField<FormDataTypeKeys>('input', 'fullName', undefined, 'Name', User.fullName)}</div>
            <div>Status: {CreateField<FormDataTypeKeys>('input', 'status', undefined, 'Status')} </div>
            <div> Looking for a job: {CreateField<FormDataTypeKeys>('input', 'lookingForAJob', undefined, undefined, 'checkbox')}</div>
            <div>
               Contact:
               {Object.entries(User.contacts).map(([keys, value], key) => { return <ProfileEditContact key={key} value={value} keys={keys as keyof UserDataContact} /> })}
            </div>
            <div> My professional skills: {CreateField<FormDataTypeKeys>('textarea', 'lookingForAJobDescription', undefined, 'Your skills')}</div>
            <div>About me: {CreateField<FormDataTypeKeys>('textarea', 'aboutMe', undefined, 'About me')}</div>
            <Button type="primary" size='small' onClick={props.handleSubmit}>EditMode</Button>
         </form>
      </div>
   )
}
let ProfileEditModeForm = reduxForm<FormDataType>({ form: 'EditMode' })(ProfileEditModeField)



let ProfileEditMode: React.FC<changeEditModeType & PropsType> = (props) => {
   const Auth = useSelector(getAuth)
   const dispatch: AppDispatch = useDispatch()


   let onSubmit = (data: FormDataType) => {
      let profile = {
         userId: Auth.id,
         lookingForAJob: data.lookingForAJob,
         lookingForAJobDescription: data.lookingForAJobDescription,
         fullName: data.fullName,
         contacts: data.contacts,
         aboutMe: data.aboutMe
      }
      dispatch(UpdateData(profile, Auth.id, data.status))
      props.changeEditMode(false)
   }

   return (
      <ProfileEditModeForm initialValues={props.ObjData} {...props} onSubmit={onSubmit} />
   )
}



let ProfileEditContact: FC<ProfileEntries> = (props) => {
   return (
      <div className="ProfileDataContact">{props.keys}: {CreateField('input', `contact.${props.keys}`)} </div>
   )
}



type ProfileEntries = {
   keys: string
   value: string | null
   key: number
}

export type changeEditModeType = {
   changeEditMode: (p: boolean) => void
}

type FormDataType = {
   userId: number | null
   fullName: string
   lookingForAJob: boolean
   contacts: UserDataContact
   lookingForAJobDescription: string
   aboutMe: string
   status: {
      status: string
   }
}
export type UserDataContactKeys = keyof UserDataContact
export type FormDataTypeKeys = keyof FormDataType

type PropsType = {
   ObjData: any
}

export default ProfileEditMode