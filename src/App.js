import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Main from './sections/Main';
import About from './sections/About';
import Contact from './sections/Contact';
import './App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [user, setUser] = useState(null);  // Define user state

  const openLogin = () => {
    setIsLoginOpen(true);
    setIsRegisterOpen(false); // Close register form
  };

  const openRegister = () => {
    setIsRegisterOpen(true);
    setIsLoginOpen(false); // Close login form
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
              <a className="nav-link" href="#home">Ana Sayfa</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">Hakkımızda</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">İletişim</a>
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

      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage openLogin={openLogin} openRegister={openRegister} />} />
        <Route path="/main" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Login and Register forms */}
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

      {/* Footer (Only in App.js, not in HomePage) */}
      <footer className="footer bg-dark">
        <p className="text-center text-white">&copy; 2025 CRM Support. Tüm hakları saklıdır.</p>
      </footer>
    </Router>
  );
};

export default App;
