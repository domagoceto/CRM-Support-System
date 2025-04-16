import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Link } from 'react-scroll'; 
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import UserPanel from './pages/UserPanel';
import './App.css';
import UserNavbar from './sections/UserNavbar'; // UserNavbar'ı import ettik

const AppLayout = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [user, setUser] = useState(null);

  const location = useLocation(); // bu hook sadece Router içinde çalışır!
  const isUserPanel = location.pathname === '/UserPanel'; // bulunduğumuz path'e göre kontrol

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
    <>
      {/* Navbar yalnızca anasayfa gibi sayfalarda görünsün */}
      {!isUserPanel && (
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
      )}

      {/* UserPanel sayfası için özel navbar */}
      {isUserPanel && (
        <UserNavbar user={user} onLogout={() => setUser(null)} />
      )}

      {/* Sayfa içerikleri */}
      <Routes>
        <Route path="/" element={<HomePage openLogin={openLogin} openRegister={openRegister} />} />
        <Route path="/userPanel" element={<UserPanel user={user} />} />
      </Routes>

      {/* Giriş ve Kayıt popup'ları */}
      {isLoginOpen && (
        <div className="form-popup">
          <button onClick={closeForms} className="close-btn">X</button>
          <LoginPage setUser={setUser} openRegister={openRegister} setIsLoginOpen={setIsLoginOpen} />
        </div>
      )}

      {isRegisterOpen && (
        <div className="form-popup">
          <button onClick={closeForms} className="close-btn">X</button>
          <RegisterPage openLogin={openLogin} />
        </div>
      )}

      {/* Footer sadece userPanel dışında görünsün */}
      {!isUserPanel && (
        <footer className="footer bg-dark">
          <p className="text-center text-white">&copy; 2025 CRM Support. Tüm hakları saklıdır.</p>
        </footer>
      )}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
};

export default App;
