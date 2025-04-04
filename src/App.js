import './App.css';
import React, { useState } from 'react';
import { Link, Element } from 'react-scroll';
import RegisterPage from './RegisterPage';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import About from './About';
import Contact from './Contact';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const goToLogin = () => {
    setIsLoginOpen(true);
    setIsRegisterOpen(false); // Diğerini kapat
  };

  const goToRegister = () => {
    setIsRegisterOpen(true);
    setIsLoginOpen(false); // Diğerini kapat
  };

  const closeForms = () => {
    setIsLoginOpen(false);
    setIsRegisterOpen(false);
  };

  return (
    <div className="page-container">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand mx-auto" href="#home">CRM Sistemi</a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto mx-auto">
            <li className="nav-item">
              <Link className="nav-link" to="home" smooth={true} duration={500}>Ana Sayfa</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="about" smooth={true} duration={500}>Hakkımızda</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="contact" smooth={true} duration={500}>İletişim</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={goToLogin}>Giriş Yap</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={goToRegister}>Kayıt Ol</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* İçerik */}
      <div className="content">
        <Element name="home">
          {currentPage === 'home' && <HomePage />}
        </Element>

        <Element name="about">
          <About />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>

        {/* Form Kutuları */}
        {isLoginOpen && (
          <div className="form-popup-box">
            <button className="close-btn" onClick={closeForms}>X</button>
            <LoginPage goToRegister={goToRegister} />
          </div>
        )}

        {isRegisterOpen && (
          <div className="form-popup-box">
            <button className="close-btn" onClick={closeForms}>X</button>
            <RegisterPage goToLogin={goToLogin} />
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="footer bg-dark">
        <p className="text-center text-white">&copy; 2025 CRM Support. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
};

export default App;
