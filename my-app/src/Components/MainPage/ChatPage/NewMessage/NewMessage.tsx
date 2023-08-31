import React from 'react'

export type PropsType = {
   userId?: number
   photo: string
   userName: string
   message: string
}

const NewMessage: React.FC<PropsType> = (props) => {
   return (
      <div>

         <img src={props.photo} /> <b>{props.userName}</b>
         <br /> {props.message}
         <hr />
      </div>

   )
}


export default NewMessage