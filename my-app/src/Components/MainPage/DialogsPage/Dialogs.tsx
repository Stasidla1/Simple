import { FC } from "react";
import Chat from "./Chat/Chat";
import EnterSpace from "./EnterSpace/EnterSpace";
import UserAll from "./User/UserAll";
import './Dialogs.css'



let Dialogs: FC = () => {
   return (
      <div className="Dialogs">
         <UserAll />
         <Chat />
         <EnterSpace />
      </div>)
}

export default Dialogs