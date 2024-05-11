import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import Work from '../component/Work';
import Heroimage2 from '../component/Heroimage2';


const Project = () => {
  return (
    <div>
          <Navbar/>
          <Heroimage2  heading="PROJECTS." text=" Some of my most recent works"/>
          <Work />
          <Footer/>
    </div>
  )
}

export default Project;
