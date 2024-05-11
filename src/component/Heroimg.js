import '../styles/Heroimg.css';
import Introimg from "../assets/intro-bg.jpg";
import Resume  from "../assets/Sowndarya.pdf";
import React from 'react';
import { Link } from 'react-router-dom';

const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className='into-img' src={Introimg} alt=""/>
        </div>
        <div className='content'>
          <p>HI, I'M SOWNDARYA.</p>
          <h1>Civil Engineering Enthusiast and Python Developer.</h1>
          <p className='name'>I am a dedicated civil engineering enthusiast who seeks to integrate the power of Python programming into the world of civil engineering to drive efficiency and innovation in infrastructure design and analysis.</p>
          <div>
            <Link to="/project" className="btn">Projects</Link>
            <a className="btn btn-light" href={Resume}>Resume</a>
          </div>
        </div>
      
    </div>
  )
}

export default Heroimg
