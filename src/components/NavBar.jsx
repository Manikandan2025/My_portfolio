import React, {  useState } from 'react'
import './NavBar.css' 
const NavBar = () => {
  const[menu,setMenu]=useState("home")
  return (
    <div className="navbar">
        <img src="src\assets\pngegg.png" className='logo' alt="" />
        <ul className="navmenu">
            <li>Home</li>
            <li>About Me</li>
            <li>Projects</li>
            <li>Contact</li>

        </ul>
      <div className='nav-connect'>Connect With Me</div>
    </div>
  )
}

export default NavBar
