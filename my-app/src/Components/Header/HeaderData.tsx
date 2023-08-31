import { UserData } from '../../Type/Types';
import { NavLink } from "react-router-dom";
import { FC } from 'react';
import Icon from '../../SupportFunction/Icon/Icon';
import { useSelector } from 'react-redux';
import { getMeHeader } from '../../Selectors/AuthSelector';


type PropsType = {
   id: number
}

let HeaderData: FC<PropsType> = (props) => {
   const Me = useSelector(getMeHeader)

   return (
      <div className="HeaderMainData" >
         <NavLink to={`/Profile/${props.id}`}>
            <div className='Header_img' >
               {Me.photos.small ? <img src={Me.photos.small} alt='Check' /> : <Icon />}
            </div>
         </NavLink>
      </div >
   )
}

export default HeaderData