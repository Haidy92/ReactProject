

import React from "react"
import Navbar from "../components/navbar"
import { Outlet } from "react-router-dom"

function Rootlayout(){
    return (
    <>
    ok
  <Navbar></Navbar>
  <Outlet></Outlet>
    </>)
  }
  export default Rootlayout