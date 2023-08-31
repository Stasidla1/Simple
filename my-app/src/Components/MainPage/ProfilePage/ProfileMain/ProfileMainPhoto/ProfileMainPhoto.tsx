import { ChangeEvent, FC } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { UpdatePhoto } from '../../../../../Redux/ProfileReducer'
import { AppDispatch } from '../../../../../Redux/ReduxStore'
import { getProfileUser } from '../../../../../Selectors/ProfileSelector'
import Icon from '../../../../../SupportFunction/Icon/Icon'
import './ProfileMainPhoto.css'

type PropsType = {
   isOwner: boolean
}


let ProfileMainPhoto: FC<PropsType> = (props) => {
   const User = useSelector(getProfileUser)
   const dispatch: AppDispatch = useDispatch()
   let onPhotoChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files?.length) {
         dispatch(UpdatePhoto(e.target.files[0], User.userId))
      }
   }

   return (
      <div className="ProfileMainPhoto">
         {User?.photos.large ? <img src={User.photos.large} alt='Check internet' /> : <Icon />}
         {props.isOwner && <input type='file' onChange={onPhotoChange} />}
      </div>
   )
}

export default ProfileMainPhoto