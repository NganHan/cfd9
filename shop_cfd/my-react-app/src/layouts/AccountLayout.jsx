import React from 'react'
import {useSelector} from 'react-redux'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { AUTH } from '../core/constants/path'
import {Navigate} from 'react-router-dom'

export default function AccountLayout() {
  // const {user} = useSelector(store => store.user)
  // if(user) return <Navigate to={AUTH}/>
  return (
    <>
        <Header />
        <Sidebar />
        <Outlet />
        <Footer />
    </>
  )
}
