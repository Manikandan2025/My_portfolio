import React, { useState ,useRef} from "react";
import "./NavBar.css";
import protfolio from "../assets/pngegg.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
const NavBar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef=useRef();
  const openMenu=()=>{
    menuRef.current.style.right="0";
  }
  const closeMenu=()=>{
    menuRef.current.style.right="-350px";
  }
  return (
    <div className="navbar">
      <img src={protfolio} className="logo" alt="" />
      <FontAwesomeIcon icon={faBars} className="nav-mob-open" onClick={openMenu}/>
      <ul ref={menuRef} className="navmenu">
      <FontAwesomeIcon icon={faXmark} className="nav-mob-close" onClick={closeMenu}/> 
        <li
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          <AnchorLink className="anchor-link" href="#home">
            <p>Home</p>
          </AnchorLink>
        </li>
        <li
          onClick={() => setMenu("about")}
          className={menu === "about" ? "active" : ""}
        >
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p>About Me</p>
          </AnchorLink>
        </li>
        <li
          onClick={() => setMenu("project")}
          className={menu === "project" ? "active" : ""}
        >
          <AnchorLink className="anchor-link" offset={50} href="#project">
            <p>Projects</p>
          </AnchorLink>
        </li>
        <li
          onClick={() => setMenu("contact")}
          className={menu === "contact" ? "active" : ""}
        >
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p>Contact</p>
          </AnchorLink>
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default NavBar;
