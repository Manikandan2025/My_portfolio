import React from "react";
import "./Me.css";
import profile from "../assets/profile.jpeg";
const Me = () => {
  return (
    <div className="me">
      <img className="profile" src={profile} alt="" width={"150px"} />
      <h1>
       <span> I'm Manikandan M,</span>
        an aspiring Software Developer.
      </h1>
      <p>
        I have a passion for learning new technologies and applying them to
        create innovative solutions. I am always eager to take on new challenges
        and expand my skill set. My goal is to contribute to impactful projects
        and collaborate with like-minded individuals in the tech industry.

      </p>
      <div className="me-links">
        <div className="conectwithme">Connect With Me</div>
        <div className="resume">My Resume</div>
      </div>
    </div>
  );
};

export default Me;
