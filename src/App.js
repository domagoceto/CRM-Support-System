import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-scroll';  // react-scroll'dan Link bileşenini import ediyoruz
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import './App.css';

const App = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [user, setUser] = useState(null);

  const openLogin = () => {
    setIsLoginOpen(true);
    setIsRegisterOpen(false);
  };

  const openRegister = () => {
    setIsRegisterOpen(true);
    setIsLoginOpen(false);
  };

  const closeForms = () => {
    setIsLoginOpen(false);
    setIsRegisterOpen(false);
  };

  return (
    <Router>
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
              <a className="nav-link" href="#" onClick={openLogin}>Giriş Yap</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={openRegister}>Kayıt Ol</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Sayfa İçeriği */}
      <Routes>
        <Route path="/" element={<HomePage openLogin={openLogin} openRegister={openRegister} />} />
      </Routes>

      {/* Login ve Register Formları */}
      {isLoginOpen && (
        <div className="form-popup">
          <button onClick={closeForms} className="close-btn">X</button>
          <LoginPage setUser={setUser} openRegister={openRegister} />
        </div>
      )}

      {isRegisterOpen && (
        <div className="form-popup">
          <button onClick={closeForms} className="close-btn">X</button>
          <RegisterPage openLogin={openLogin} />
        </div>
      )}

      {/* Footer */}
      <footer className="footer bg-dark">
        <p className="text-center text-white">&copy; 2025 CRM Support. Tüm hakları saklıdır.</p>
      </footer>
    </Router>
  );
};

export default App;
