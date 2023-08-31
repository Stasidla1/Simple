import { Button, Menu } from "antd"
import Sider from "antd/es/layout/Sider"
import { FC, useState } from "react"
import { NavLink } from "react-router-dom"
import { SidebarType } from "../../Redux/SidebarReducer"
import {
   MenuFoldOutlined,
   MenuUnfoldOutlined,
} from '@ant-design/icons';

let SidebarLinks: FC<SidebarType> = (props) => {
   const [collapsed, setCollapsed] = useState(false);


   return (<>
      <Sider trigger={null} collapsible collapsed={collapsed}>
         <div className="demo-logo-vertical" />
         <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
               {
                  key: '1',
                  label: 'Profile',
               },
               {
                  key: '2',
                  label: 'Dialogs',
               },
               {
                  key: '3',
                  label: 'Friends',
               },
            ]}
         />
         <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
               fontSize: '16px',
               width: 64,
               height: 64,
            }}
         />
      </Sider>
   </>
   )
}

export default SidebarLinks
