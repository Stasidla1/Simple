import { FC } from "react";
import ProfileComment from "./ProfileComment/ProfileComment";
import ProfileCommentSpace from "./ProfileCommentSpace/ProfileCommentSpace";

let ProfileMainComment: FC = () => {
   return (
      <div className="ProfileMainComment">
         <ProfileComment />
         <ProfileCommentSpace />
      </div>)
}

export default ProfileMainComment