import React from 'react'
import "./About.css";
import Aboutme from "../assets/aboutme.png";
import profile from "../assets/Manipic2.jpeg"; // Assuming you have a profile image in assets

const About = () => {
  return (
    <div className='about' id='about'>
        <div className="about-title">

          <img src={Aboutme} alt="Aboutme" width="400px" />
        </div> 
        <div className="about-section">
          <div className="about-left">
            <img src={profile} alt="profile" className='mypic' />
          </div>
          <div className="about-right">
            <div className="about-para">
              <p>I'm passionate about creating clean, responsive, and user-friendly web applications using modern technologies to deliver efficient and scalable</p>
              <p>  I have experience with languages like Java, Python, and tools like HTML, CSS, JavaScript and MySQL.</p>
            </div>

          <div className="about-skills">
            <div className='about-skill'><p>HTML&CSS</p><hr style={{width:"70%"}}/></div>
            <div className='about-skill'><p>JavaScript</p><hr style={{width:"60%"}}/></div>
            <div className='about-skill'><p>React</p><hr style={{width:"50%"}}/></div>
            <div className='about-skill'><p>Java</p><hr style={{width:"60%"}}/></div>
          </div>

          </div>
          </div>  
         
    </div>
  )
}

export default About
