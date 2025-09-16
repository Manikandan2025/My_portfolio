import "./Contact.css";
import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-title">
        <img src="src\assets\contact.png" alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Get in Touch</h1>
          <p>I am currently open to new opportunities and collaborations.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img
                src="src\assets\envelope-solid-full.svg"
                width={"50px"}
                alt=""
              /><p>mmanikandan6930@gmail.com</p>
            </div>
            <div className="contact-detail">
            
              <img src="src\assets\phone-volume-solid-full.svg" width={"50px"} alt="" />
              <p>+91 7449193845</p>
            </div>
            <div className="contact-detail">
              <img src="src\assets\location-dot-solid-full.svg" width={"50px"} alt="" />
              <p>chennai,perambur</p>
            </div>

          </div>
        </div>
        <form action="" className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder="Enter your name" name="name"/>
            <label htmlFor="">Email</label>
            <input type="email" placeholder="Enter your email" name="email"/>
            <label htmlFor="">Message</label>
            <textarea name="message" placeholder="Enter your message" cols="30" rows="10"></textarea>
            <button  className="submit" type="submit">Submit</button>
        </form>

      </div>
    </div>
  );
};

export default Contact;
