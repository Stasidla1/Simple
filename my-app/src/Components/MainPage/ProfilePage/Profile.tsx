import { FC } from "react";
import ProfileMainComment from "./ProfileComment/ProfileMainComment";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import ProfileMain from "./ProfileMain/ProfileMain";
import './Profile.css'

type PropsType = {
   ObjData: any
   isOwner: boolean
}

let Profile: FC<PropsType> = (props) => {
   return (
      <div className="Profile">
         <ProfileHeader />
         <ProfileMain {...props} />
         <ProfileMainComment />
      </div>
   )
}
export default Profile