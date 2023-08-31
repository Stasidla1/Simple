import React from "react";
import { useSelector } from "react-redux";
import { getProfileStatus } from "../../../../../Selectors/ProfileSelector";


let ProfileStatus: React.FC = (props) => {
   const status = useSelector(getProfileStatus)
   return (
      <div className="ProfileStatus">
         Status: {status}
      </div>
   )
}

export default ProfileStatus