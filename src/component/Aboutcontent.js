import "../styles/Aboutcontent.css";
import { Link } from "react-router-dom";

import React from 'react'

const Aboutcontent = () => {
  return (
    <div className="about">
        <div className="left">
         <h1>Who Am I?</h1>
         <p>I am a dedicated civil engineer with a strong foundation in structural design and project management. Proficient in industry-standard software such as Staad Pro and AutoCAD, I bring precision and innovation to every project I undertake. My expertise allows me to create robust and efficient structural designs, ensuring the safety and longevity of the built environment. I am committed to delivering excellence in civil engineering, from concept to completion, and I continuously seek opportunities to leverage technology for optimal solutions. <br></br>
         <ul>
         <li>Beyond my passion for civil engineering, I am also deeply enthusiastic about <span> Python development</span>. I believe that programming skills, particularly in Python, play a pivotal role in modern engineering. Python's versatility and extensive libraries have allowed me to enhance my engineering work by automating tasks, conducting data analysis, and creating computational models.</li> 
       
         </ul></p>
         <Link to="/contact">
            <button className="btn">Contact</button>
         </Link>
        </div>
        <div className="right">
             
        </div>
      
    </div>
  )
}

export default Aboutcontent
