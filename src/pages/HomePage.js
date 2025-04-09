import React from 'react';
import Navbar from '../sections/Navbar'; 
import Footer from '../sections/Footer'; 
import Main from '../sections/Main'; 
import About from '../sections/About'; 
import Contact from '../sections/Contact'; 
import '../styles/HomePage.css';

const HomePage = ({ goToLogin, goToRegister }) => {
  return (
    <div className="home-container">
      <Navbar />
      
      <Main id="main" />
      <About id="about" />
      <Contact id="contact" />

      <Footer />
    </div>
  );
};

export default HomePage;
