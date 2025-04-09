<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Main from './sections/Main';
import About from './sections/About';
import Contact from './sections/Contact';
=======
=======
>>>>>>> parent of 09937cb (UserPanel)
=======
>>>>>>> parent of 09937cb (UserPanel)
import './App.css';
import React, { useState } from 'react';
import { Link, Element } from 'react-scroll';
import RegisterPage from './RegisterPage';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import About from './About';
import Contact from './Contact';
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> parent of 09937cb (UserPanel)
=======
>>>>>>> parent of 09937cb (UserPanel)
=======
>>>>>>> parent of 09937cb (UserPanel)

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const openLogin = () => {
    setIsLoginOpen(true);
    setIsRegisterOpen(false); // Diğerini kapat
  };

  const openRegister = () => {
    setIsRegisterOpen(true);
    setIsLoginOpen(false); // Diğerini kapat
  };

  const closeForms = () => {
    setIsLoginOpen(false);
    setIsRegisterOpen(false);
  };

  return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    <Router> {/* Router'ı buraya ekledik */}
      <Routes>
        <Route path="/" element={<HomePage openLogin={openLogin} openRegister={openRegister} />} />
        <Route path="/main" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Login ve Register formlarını modal olarak göster */}
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
    </Router>
=======
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

=======
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

>>>>>>> parent of 09937cb (UserPanel)
=======
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

>>>>>>> parent of 09937cb (UserPanel)
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> parent of 09937cb (UserPanel)
=======
>>>>>>> parent of 09937cb (UserPanel)
=======
>>>>>>> parent of 09937cb (UserPanel)
  );
};

export default App;
