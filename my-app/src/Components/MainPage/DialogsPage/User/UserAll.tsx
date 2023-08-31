import { FC } from "react";
import { useSelector } from "react-redux";
import { getUsers } from "../../../../Selectors/DialogsSelector";
import User from "./User";
import './User.css'


let UserAll: FC = () => {
   const Users = useSelector(getUsers)

   let UserAllMap = Users.map(UAL => <User key={UAL.key} name={UAL.name} photo={UAL.photo} />)
   return (
      <div className="UserAll">
         {UserAllMap}
      </div>
   )
}

export default UserAll