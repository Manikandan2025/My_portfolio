import React from "react";
import "./Me.css";
import profile from "../assets/profile.jpeg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import resume from "../../public/M_Manikandan.pdf";
const Me = () => {
  return (
    <div className="me">
      <img className="profile" src={profile} alt="" width={"150px"} />
      <h1>
        <span> I'm Manikandan M, </span>
        an aspiring Software Developer.
      </h1>
      <p>
        I have a passion for learning new technologies and applying them to
        create innovative solutions. I am always eager to take on new challenges
        and expand my skill set. My goal is to contribute to impactful projects
        and collaborate with like-minded individuals in the tech industry.
      </p>
      <div className="me-links">
        <div className="conectwithme">
          {" "}
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
        <a
          href={resume}
          download="Manikandan_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <div className="resume">My Resume</div>
        </a>
      </div>
    </div>
  );
};

export default Me;
