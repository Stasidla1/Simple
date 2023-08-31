//import './App.css'
import { Route, Routes } from "react-router-dom"
import React, { Suspense, useState } from "react"
import { useEffect } from "react"
import { GetAuth } from './Redux/AuthReducer'
import { connect, ConnectedProps } from "react-redux"
import { StoreReducers } from "./Redux/ReduxStore"
import Preloader from "./SupportFunction/Preloader/Preloader"
import { HeaderPage } from "./Components/Header/Header"
import { Login } from "./Components/Login/Login"
import { SidebarPage } from "./Components/Sidebar/Sidebar"
import {
   MenuFoldOutlined,
   MenuUnfoldOutlined,
   UploadOutlined,
   UserOutlined,
   VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import Sider from 'antd/es/layout/Sider'
import { Content, Footer, Header } from 'antd/es/layout/layout'

const ProfileConteiner = React.lazy(() => import("./Components/MainPage/ProfilePage/ProfileConteiner"))
const DialogsConteiner = React.lazy(() => import("./Components/MainPage/DialogsPage/DialogsConteiner"))
const FriendsConteiner = React.lazy(() => import("./Components/MainPage/FriendsPage/FriendsConteiner"))
const ChatPage = React.lazy(() => import("./Components/MainPage/ChatPage/ChatPage"))

const App: React.FC<StyleType> = (props) => {
   useEffect(() => {
      props.GetAuth()
   }, [])

   const {
      token: { colorBgContainer },
   } = theme.useToken();

   return (
      <>
         {props.isLoad ? <>
            <Layout style={{ minHeight: '100vh' }}>
               <Sider trigger={null}  >
                  <SidebarPage />
               </Sider>
               <Layout>
                  <Header style={{ padding: 0, background: colorBgContainer }}>
                     <HeaderPage /></Header>
                  <Content
                     style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: '#D5DBDB',
                     }}
                  > <Suspense fallback={<Preloader />}>
                        <Routes>
                           <Route path="*" element={<ProfileConteiner />} />
                           <Route path="/Dialogs" element={<DialogsConteiner />} />
                           <Route path="/Profile/:id?" element={<ProfileConteiner />} />
                           <Route path="/Friends" element={<FriendsConteiner />} />
                           <Route path="/Chat" element={<ChatPage />} />
                           <Route path="/Login" element={<Login />} />
                        </Routes>
                     </Suspense>
                  </Content>
               </Layout>
            </Layout>
         </> : 'wait'}
      </>

   )
}
let mapStateToProps = (state: StoreReducers) => {
   return {
      id: state.Auth.Auth.id,
      isLoad: state.Auth.isLoad,
   }
}
const connector = connect(mapStateToProps, { GetAuth })
type StyleType = ConnectedProps<typeof connector>

export default connect(mapStateToProps, { GetAuth })(App)