import { FC } from "react";
import AnswerMessage from "./AnswerMessage";
import EnterMessage from "./EnterMessage";
import './Chat.css'
import { useSelector } from "react-redux";
import { getAnswerMessage, getEnterMessage } from "../../../../Selectors/DialogsSelector";

let Chat: FC = () => {
   const EnterMessageSel = useSelector(getEnterMessage)
   const AnswerMessageSel = useSelector(getAnswerMessage)

   const ChatEnterMessage = EnterMessageSel.map(CEM => <EnterMessage key={CEM.key} text={CEM.text} />)
   const ChatAnswerMessage = AnswerMessageSel.map(CEM => <AnswerMessage key={CEM.key} text={CEM.text} />)
   return (
      <div className="Chat">
         <div className="ChatEnterMessage">
            {ChatEnterMessage}
         </div>
         <div className="ChatAnswerMessage">
            {ChatAnswerMessage}
         </div>
      </div>
   )
}

export default Chat