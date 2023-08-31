import { Button } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { getProfileUser } from "../../../../../../Selectors/ProfileSelector";
import { changeEditModeType } from "../ProfileEditMode.js/ProfileEditMode";
import ProfileStatus from '../ProfileStatus'

type PropsType = {
   isOwner: boolean
}

let ProfileData: React.FC<PropsType & changeEditModeType> = (props) => {
   const User = useSelector(getProfileUser)

   return (
      <div className="ProfileMainData">
         <div>Name: {User.fullName}</div>
         <ProfileStatus />
         <div> Looking for a job: {User.lookingForAJob ? 'Yes' : 'No'}</div>
         <div>
            Contact:
            {Object.entries(User.contacts).map(([keys, value], num) => { return <ProfileDataContact key={num} value={value} keys={keys} /> })}
         </div>
         <div> My professional skills: {User.lookingForAJobDescription ? User.lookingForAJobDescription : "I'm a bot"}</div>
         <div>About me: {User.aboutMe}</div>
         {props.isOwner && <Button type="primary" size='small' onClick={() => props.changeEditMode(true)}>EditMode</Button>}
      </div>
   )
}
type ProfileDataContactType = {
   keys: string | null
   value: string | null
}


let ProfileDataContact: React.FC<ProfileDataContactType> = (props) => {
   return (
      <div className="ProfileDataContact">{props.keys}: {props.value ? props.value : 'Anon'} </div>
   )
}

export default ProfileData