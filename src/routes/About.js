import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import Heroimage2 from '../component/Heroimage2';
import Aboutcontent from '../component/Aboutcontent';



const About = () => {
  return (
    <div>
          <Navbar/>
          <Heroimage2  heading="ABOUT" text=" I'm an Enthusiastic Civil Engineer and Python developer!"/>
          <Aboutcontent/>
          <Footer/>
    </div>
  )
}

export default About
