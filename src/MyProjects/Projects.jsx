import React from "react";
import "./Projects.css";
import image from  '../assets/myprojects.png'
import project1 from '../assets/smart classroom.jpg'
import project2 from '../assets/studentMangement.png'
import project3 from '../assets/businessContract.png' 


const Projects = () => {
  return (
    <div className="projects" id="project">
      <div className="project-title">
        <img src={image} alt="" />
      </div>
      <div className="project-list">
        <div className="project1 project">
          <img src={project1} alt="" />
          <h2>Smart Classroom Management</h2>
          <p>
            A web application that allows teachers to manage their classrooms
            more efficiently. It includes features such as attendance tracking,
            assignment management, and communication tools.
          </p>
        </div>
        <div className="project2 project">
          <img src={project2} alt="" />
          <h2>Student Management</h2>
          <p>
            {" "}
            A Student Management System built with Python Tkinter for the GUI
            and XAMPP (MySQL) for the backend database to efficiently manage
            student records.
          </p>
        </div>
        <div className="project3 project">
          <img src={project3} alt="" />
          <h2>Business Contract Validation</h2>
          <p>
            A Business Contract Validation System leveraging NLP and transformer
            models to automatically extract, validate, and summarize key clauses
            from contracts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
