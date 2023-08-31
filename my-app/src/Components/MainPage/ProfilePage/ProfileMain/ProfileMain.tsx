import { FC } from "react";
import ProfileMainData from "./ProfileMainData/ProfileMainData";
import ProfileMainPhoto from "./ProfileMainPhoto/ProfileMainPhoto";
import './ProfileMain.css'

type PropsType = {
   ObjData: any
   isOwner: boolean
}


let ProfileMain: FC<PropsType> = (props) => {
   return (
      <div className="ProfileMain">
         <ProfileMainPhoto {...props} />
         <ProfileMainData {...props} />
      </div>
   )
}

export default ProfileMain