import "./Contact.css";
import React from "react";
import email from "../assets/envelope-solid-full.svg";
import phone from "../assets/phone-volume-solid-full.svg";
import location from "../assets/location-dot-solid-full.svg";
import contact from "../assets/contact.png";
const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();


    const formData = new FormData(event.target);

    formData.append("access_key", "a96ac3af-8c69-4391-bb15-9ce870fdeefe");

    const object = Object.fromEntries(formData);

    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert("Email sent successfully")
      console.log("Success", res);
    }
  };
  return (
    <div className="contact" id="contact">
      <div className="contact-title">
        <img src={contact} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Get in Touch</h1>
          <p>I am currently open to new opportunities and collaborations.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img
                src={email}
                width={"50px"}
                alt=""
              />
              <p>mmanikandan6930@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img
                src={phone}
                width={"50px"}
                alt=""
              />
              <p>+91 7449193845</p>
            </div>
            <div className="contact-detail">
              <img
                src={location}
                width={"50px"}
                alt=""
              />
              <p>chennai,perambur</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} action="" className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="">Message</label>
          <textarea
            name="message"
            placeholder="Enter your message"
            cols="30"
            rows="10"
          ></textarea>
          <button className="submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
