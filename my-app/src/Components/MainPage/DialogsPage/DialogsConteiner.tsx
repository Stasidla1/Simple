import { FC } from "react";
import Dialogs from "./Dialogs";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAuth } from "../../../Selectors/AuthSelector";


let DialogsConteiner: FC = (props) => {
   const Auth = useSelector(getAuth)

   if (!Auth.id) {
      return <Navigate to='/Login' />
   }
   return (
      <Dialogs {...props} />
   )
}


export default (DialogsConteiner)