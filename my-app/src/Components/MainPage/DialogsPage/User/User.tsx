import { FC } from "react";
import { UsersDataType } from "../../../../Type/Types";

let User: FC<UsersDataType> = (props) => {
   return (
      <div className="User">
         <div className="UserPhoto">
            <img src={props.photo} alt='Check internet' />
         </div>
         <div className="UserName">{props.name}</div>
      </div>
   )
}

export default User