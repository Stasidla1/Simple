import React from "react";
import { useSelector } from "react-redux";
import { getProfileComment } from "../../../../../Selectors/ProfileSelector";
import Posts from "./Comment";
import './ProfileComment.css'


let ProfileComment: React.FC = () => {
   const Comment = useSelector(getProfileComment)

   let ProfileCommentMap = Comment.map(PCM => <Posts key={PCM.key} text={PCM.text} likeCount={PCM.likeCount} photo={PCM.photo} />)
   return (
      <div className="ProfileComment">
         {ProfileCommentMap}
      </div>
   )
}

export default ProfileComment