// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-scroll';
import { useLocation } from 'react-router-dom';

const Navbar = ({ openLogin, openRegister }) => {
  const location = useLocation();
  const isUserPanel = location.pathname === '/userPanel';

  if (isUserPanel) return null; // UserPanel'de navbar hiç render edilmesin

  return (
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
            <a className="nav-link" href="#" onClick={openLogin}>Giriş Yap</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={openRegister}>Kayıt Ol</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
