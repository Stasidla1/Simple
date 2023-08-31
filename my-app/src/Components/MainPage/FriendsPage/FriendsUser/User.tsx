import { Button } from "antd";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { DeleteUser, SubscribeUser } from "../../../../Redux/FriendsReducer";
import { AppDispatch } from "../../../../Redux/ReduxStore";
import { getFollowed } from "../../../../Selectors/FriendsSelector";
import Icon from "../../../../SupportFunction/Icon/Icon";
import { FriendsData } from "../../../../Type/Types";



export const User: FC<FriendsData> = (props) => {
   const dispatch: AppDispatch = useDispatch()
   const Followed = useSelector(getFollowed)
   return (
      <div className="User">
         <div className="UserImg">
            <NavLink to={'/Profile/' + props.id}>
               {props.photos.small ? <img src={props.photos.small} alt='Check internet' /> : <Icon />}
            </NavLink>
         </div>

         <div className="UserName">
            {props.name}
         </div>
         {props.status ? <div>{props.status}</div> : undefined}
         <div>
            {props.followed ?
               <Button type="primary" size='small' disabled={Followed.some(userId => userId === props.id)} onClick={() => { dispatch(DeleteUser(props.id)) }}>UnFollow</Button>
               : <Button type="primary" size='small' disabled={Followed.some(userId => userId === props.id)} onClick={() => { dispatch(SubscribeUser(props.id)) }}>Follow</Button>}
         </div>
      </div>
   )
}

