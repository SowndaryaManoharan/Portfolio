import React from 'react';
import Navbar from '../component/Navbar';
import Heroimg from '../component/Heroimg';
import Footer from '../component/Footer';
import Skills from '../component/Skills';



const Home = () => {
  return (
    <div>
          <Navbar/>
          <Heroimg/>
          <Skills/>
          <Footer/>
    </div>
  )
}

export default Home
