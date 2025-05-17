import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom'; 
import { Link } from 'react-scroll'; 
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import UserPanel from './pages/UserPanel';
import SupportPanel from './pages/SupportPanel';
import KullaniciListesi from './sections/KullaniciListesi';
import DestekTalep from './sections/DestekTalep';
import UserProfile from './sections/UserProfile';
import Taleplerim from './sections/Taleplerim';
import './App.css';

const AppLayout = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [user, setUser] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  // Navbar sadece HomePage'de görünsün
  const isHomePage = location.pathname === '/'; 

  const openLogin = () => {
    setIsLoginOpen(true);
    setIsRegisterOpen(false);
  };

  const onLogout = () => {
    // Çıkış yapma onayı almak için confirm kullanıyoruz
    const confirmLogout = window.confirm("Çıkış yapmak istediğinizden emin misiniz?");
    
    if (confirmLogout) {
      console.log("Kullanıcı çıkışı onayladı.");
  
      // Kullanıcıyı null yaparak çıkış yapıyoruz
      setUser(null); 
      // Ana sayfaya yönlendiriyoruz
      navigate('/'); 
    } else {
      console.log("Kullanıcı çıkışı iptal etti.");
    }
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
      {/* Navbar sadece anasayfa'da görünsün */}
      {isHomePage && (
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

      {/* Sayfa içerikleri */}
      <Routes>
        <Route path="/" element={<HomePage openLogin={openLogin} openRegister={openRegister} />} />
        <Route path="/userPanel" element={<UserPanel user={user} onLogout={onLogout} />} />
        <Route path="/userPanel/profil" element={<UserProfile user={user} />} />
        <Route path="/userPanel/destek-talep" element={<DestekTalep user={user} />} />
        <Route path="/userPanel/destek-taleplerim" element={<Taleplerim user={user} />} />
        <Route path="/supportPanel" element={<SupportPanel supportUser={user} onLogout={onLogout} />} />
         <Route path="/supportPanel/kullanicilar" element={<KullaniciListesi />} />  

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

      {/* Footer sadece HomePage'de görünsün */}
      {isHomePage && (
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
