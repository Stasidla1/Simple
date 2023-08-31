import { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { GetUser, GetStatus } from '../../../Redux/ProfileReducer';
import { AppDispatch } from '../../../Redux/ReduxStore';
import { getAuth } from '../../../Selectors/AuthSelector';
import { getProfileLoad, getProfileStatus, getProfileUser } from '../../../Selectors/ProfileSelector';
import WithRouter from '../../../SupportFunction/HOK/WithRouter';
import Profile from './Profile';


export interface WithRouterProps {
   location: ReturnType<typeof useLocation>;
   params: Record<string, string>;
   navigate: ReturnType<typeof useNavigate>;
}

let ProfileConteiner: FC<WithRouterProps> = (props) => {
   const Auth = useSelector(getAuth)
   const status = useSelector(getProfileStatus)
   const load = useSelector(getProfileLoad)
   const User = useSelector(getProfileUser)
   const dispatch: AppDispatch = useDispatch()

   let isOwner = false;
   let userId: number | null = +props.params.id;
   if (!userId) {
      userId = Auth.id
   }
   if (Auth.id === userId) {
      isOwner = true
   }
   useEffect(() => {
      if (Auth.id || (!Auth.id && userId)) {
         dispatch(GetUser(userId))
         dispatch(GetStatus(userId))
      }
   }, [userId])

   let StatusObj = {
      status: status
   }
   let ObjData = { ...User, ...StatusObj }

   if (!Auth.id && !userId) {
      return <Navigate to='/Login' />
   }
   return (
      <div>
         {load ? <Profile {...props} isOwner={isOwner} ObjData={ObjData} /> : "wait"}
      </div>
   )
}


export default WithRouter(ProfileConteiner)