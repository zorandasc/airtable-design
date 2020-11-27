import React, { useContext } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Sidebar from "./Sidebar"
import { GatsbyContext } from "../context/context"

const Layout = ({ children }) => {
  const { isSidebarOpen } = useContext(GatsbyContext)
  return (
    <>
      <Navbar></Navbar>
      {isSidebarOpen && <Sidebar></Sidebar>}
      {children}
      <Footer></Footer>
    </>
  )
}

export default Layout
