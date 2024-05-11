import React, { useState } from 'react';
import '../styles/Navbar.css';
import {FaBars, FaTimes} from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Navbar() 
{
    const [click, setClick] = useState(false);
    const [color,setcolor]=useState(false);
    const handleClick =()=> 
    {
        setClick(!click);
    }
    const changeColor = ()=> 
    {
        if(window.scrollY>=100)
        {
          setcolor(true);
        }
        else
        {
          setcolor(false);
        }
      
    };
    window.addEventListener("scroll",changeColor);

  return (
    <div className={color ? "header header-bg": "header"}>
          <Link to ="/">
            <h1>Portfolio</h1>
          </Link>
          <ul className= {click ?  "nav-menu active" :"nav-menu"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/project">Project</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <div className='hamburger' onClick={handleClick}>
          
          {click ? (
         <FaTimes size={20} style={{ color: "fff" }} />
           ) : (
          <FaBars size={20} style={{ color: "fff" }} />
          )}

          </div>
    </div>
  )
}
