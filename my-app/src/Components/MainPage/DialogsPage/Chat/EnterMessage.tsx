import { FC } from "react"
import { MessageType } from "../../../../Type/Types"



let EnterMessage: FC<MessageType> = (props) => {
   return (
      <div className='EnterMessage'>
         {props.text}
      </div>
   )
}

export default EnterMessage