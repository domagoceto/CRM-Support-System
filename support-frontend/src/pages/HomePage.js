import React from 'react';
import Main from '../sections/Main';
import About from '../sections/About';
import Contact from '../sections/Contact';
import '../styles/HomePage.css';

const HomePage = ({ openLogin, openRegister }) => {
  return (
    <div className="home-container">
      <div id="home">
        <Main />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default HomePage;
