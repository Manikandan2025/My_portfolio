import React, { useState } from "react";
import "./NavBar.css";
import protfolio from "../assets/pngegg.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const NavBar = () => {
  const [menu, setMenu] = useState("home");
  return (
    <div className="navbar">
      <img src={protfolio} className="logo" alt="" />
      <ul className="navmenu">
          <li 
          onClick={() => setMenu("home")} 
          className={menu === "home" ? "active" : ""}
        >
          <AnchorLink className="anchor-link" href="#home"><p>Home</p></AnchorLink>
          
        </li>
        <li 
          onClick={() => setMenu("about")} 
          className={menu === "about" ? "active" : ""}
        >
          <AnchorLink className="anchor-link" offset={50} href="#about"><p>About Me</p></AnchorLink>
          
        </li>
        <li 
          onClick={() => setMenu("project")} 
          className={menu === "project" ? "active" : ""}
        >
          <AnchorLink className="anchor-link" offset={50} href="#project"><p>Projects</p></AnchorLink>
          
        </li>
        <li 
          onClick={() => setMenu("contact")} 
          className={menu === "contact" ? "active" : ""}
        >
          <AnchorLink className="anchor-link" offset={50} href="#contact"><p>Contact</p></AnchorLink>
          
        </li>
      </ul>
      <div className="nav-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect With Me</AnchorLink></div>
    </div>
  );
};

export default NavBar;
