import React, { useState } from "react";
import './ProfileMainData.css'
import ProfileData from "./ProfileData.js/ProfileData";
import ProfileEditMode from "./ProfileEditMode.js/ProfileEditMode";
import { UserData } from "../../../../../Type/Types";

type PropsType = {
   isOwner: boolean
   ObjData: any
}


let ProfileMainData: React.FC<PropsType> = (props) => {
   const [editMode, changeEditMode] = useState<boolean>(false)
   return (
      <>
         {editMode ? <ProfileEditMode changeEditMode={changeEditMode} {...props} /> : <ProfileData {...props} changeEditMode={changeEditMode} />}
      </>
   )
}



export default ProfileMainData