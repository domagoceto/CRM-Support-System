import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // react-router-dom kullanarak yönlendirme
import { Link as ScrollLink } from 'react-scroll'; // react-scroll ile kaydırma işlemi
import './App.css';
import RegisterPage from './RegisterPage';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import About from './About';
import Contact from './Contact';
import UserPanel from './UserPanel'; // UserPanel'i ayrı bir sayfa olarak import ettik.

const App = () => {
  const [user, setUser] = useState(null);
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

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    setIsLoginOpen(false);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <div className="page-container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand mx-auto" href="#home">CRM Sistemi</a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto mx-auto">
              {!user ? (
                <>
                  <li className="nav-item">
                    <ScrollLink to="home" smooth={true} duration={500} className="nav-link">Ana Sayfa</ScrollLink>
                  </li>
                  <li className="nav-item">
                    <ScrollLink to="about" smooth={true} duration={500} className="nav-link">Hakkımızda</ScrollLink>
                  </li>
                  <li className="nav-item">
                    <ScrollLink to="contact" smooth={true} duration={500} className="nav-link">İletişim</ScrollLink>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#" onClick={goToLogin}>Giriş Yap</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#" onClick={goToRegister}>Kayıt Ol</a>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={handleLogout}>Çıkış Yap</a>
                </li>
              )}
            </ul>
          </div>
        </nav>

        <div className="content">
          <Routes>
            {/* Ana Sayfa, Hakkımızda ve İletişim sayfaları burada */}
            <Route path="/" element={
              <>
                <div id="home">
                  <HomePage />
                </div>
                <div id="about">
                  <About />
                </div>
                <div id="contact">
                  <Contact />
                </div>
              </>
            } />
            
            {/* UserPanel sadece /userpanel yolunda açılacak */}
            {user && <Route path="/userpanel" element={<UserPanel />} />}

          </Routes>

          {/* Login ve Register Formları sadece pop-up olarak görünecek */}
          {isLoginOpen && (
            <div className="form-popup-box">
              <button className="close-btn" onClick={closeForms}>X</button>
              <LoginPage setUser={handleLoginSuccess} goToRegister={goToRegister} />
            </div>
          )}

          {isRegisterOpen && (
            <div className="form-popup-box">
              <button className="close-btn" onClick={closeForms}>X</button>
              <RegisterPage goToLogin={goToLogin} />
            </div>
          )}
        </div>

        <footer className="footer bg-dark">
          <p className="text-center text-white">&copy; 2025 CRM Support. Tüm hakları saklıdır.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
