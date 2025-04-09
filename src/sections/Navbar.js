import React, { useState } from 'react';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const goToLogin = () => {
    setIsLoginOpen(true);
    setIsRegisterOpen(false);
  };

  const goToRegister = () => {
    setIsRegisterOpen(true);
    setIsLoginOpen(false);
  };

  const closeForms = () => {
    setIsLoginOpen(false);
    setIsRegisterOpen(false);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error(`Element with id "${id}" not found.`);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1>CRM Destek</h1>
      </div>
      <div className="navbar-right">
        <ul>
          <li><a href="#main" onClick={(e) => { e.preventDefault(); scrollToSection('main'); }}>Ana Sayfa</a></li>
          <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>Hakkımızda</a></li>
          <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>İletişim</a></li>
          <li><a href="#" onClick={goToLogin}>Giriş Yap</a></li>
          <li><a href="#" onClick={goToRegister}>Kayıt Ol</a></li>
        </ul>
      </div>

      {/* Giriş Yap ve Kayıt Ol formunu modal olarak açıyoruz */}
      {isLoginOpen && (
        <div className="form-popup-box">
          <button className="close-btn" onClick={closeForms}>X</button>
          <LoginPage />
        </div>
      )}

      {isRegisterOpen && (
        <div className="form-popup-box">
          <button className="close-btn" onClick={closeForms}>X</button>
          <RegisterPage />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
