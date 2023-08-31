import { FC } from "react";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";


export const SidebarPage: FC = () => {
   return (<>
      <Menu
         theme="dark"
         mode="inline"
         defaultSelectedKeys={['1']}
      >
         <Menu.Item key='1'> <NavLink to='/Profile'>Profile</NavLink></Menu.Item>
         <Menu.Item key='2'><NavLink to='/Dialogs'>Dialogs</NavLink></Menu.Item>
         <Menu.Item key='3'><NavLink to='/Friends'>Friends</NavLink></Menu.Item>
         <Menu.Item key='4'><NavLink to='/Chat'>Chat</NavLink></Menu.Item>
      </Menu>
   </>
   )
}

