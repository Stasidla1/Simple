import React from "react";
import { CommentData } from "../../../../../Type/Types";


let Posts: React.FC<CommentData> = (props) => {
   return (
      <div className="Comment">
         <div className='CommentData'>
            <div className="Comment_Img">
               <img src={props.photo} alt='Check internet' />
            </div>
            <div className="Comment_likeCount">
               Like: {props.likeCount}
            </div>
         </div>
         <div className="Comment_text">
            {props.text}
         </div>
      </div>
   )
}

export default Posts