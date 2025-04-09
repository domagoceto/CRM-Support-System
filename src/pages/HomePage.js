import React from 'react';
import Navbar from '../sections/Navbar'; 
import Main from '../sections/Main'; 
import About from '../sections/About'; 
import Contact from '../sections/Contact'; 
import '../styles/HomePage.css';

const HomePage = ({ openLogin, openRegister }) => {
  return (
    <div className="home-container">
      <Main id="main" />
      <About id="about" />
      <Contact id="contact" />
    </div>
  );
};

export default HomePage;
