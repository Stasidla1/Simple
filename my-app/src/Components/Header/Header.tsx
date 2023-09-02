import { theme } from 'antd'
import { Header } from 'antd/es/layout/layout'
import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { Logout } from '../../Redux/AuthReducer'
import { AppDispatch } from '../../Redux/ReduxStore'
import { getAuth } from '../../Selectors/AuthSelector'
import './Header.css'
import HeaderData from './HeaderData'


export const HeaderPage: FC = () => {

   const Auth = useSelector(getAuth)
   const dispatch: AppDispatch = useDispatch()

   return (

      <div className="Header">
         <div className='Header_Logo'>
            <img src="https://www.designmantic.com/images/how-to/circle-image-4.png" alt='Check your internet' />
         </div>
         <div className='HeaderData'>
            {Auth.id ?
             <HeaderData id={Auth.id} /> :
              <div className='HeaderLogin'>
               <NavLink to='/Login'><button>Sign in</button></NavLink> 
               <a href='https://social-network.samuraijs.com' target='_blank'><button>Sign up</button></a>
               </div>}
         </div>
         {Auth.id && <div className='HeaderButton'><button onClick={() => { dispatch(Logout()) }}>Logout</button></div>}
      </div>
   )
}
