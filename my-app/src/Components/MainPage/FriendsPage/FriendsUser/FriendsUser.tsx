import { User } from "./User";
import './FriendsUser.css'
import { FC } from "react";
import { getUserFriends } from "../../../../Selectors/FriendsSelector";
import { useSelector } from "react-redux";





let FriendsUser: FC = () => {
   const UserData = useSelector(getUserFriends)


   let FriendsUserMap = UserData.map(FUM => <User id={FUM.id} key={FUM.id} photos={FUM.photos} name={FUM.name} status={FUM.status} followed={FUM.followed} />)
   return (
      <div className='FriendsUser'>
         {FriendsUserMap}
      </div>
   )
}

export default FriendsUser