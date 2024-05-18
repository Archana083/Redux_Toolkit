import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Component/Footer'
import Header from '../Component/Navbar'

const Layout = () => {
  return (
    <>
     <Header/>
    <Outlet/>
    <Footer/>

    </>
  )
}

export default Layout