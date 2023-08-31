import { FC } from "react";
import { MessageType } from "../../../../Type/Types";


let AnswerMessage: FC<MessageType> = (props) => {
   return (
      <div className='AnswerMessage'>
         {props.text}
      </div>
   )
}

export default AnswerMessage