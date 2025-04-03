import './App.css';
import React, { useState } from 'react';
import RegisterPage from './RegisterPage'; // Kayıt Sayfası
import LoginPage from './LoginPage'; // Giriş Sayfası

const App = () => {
  const [currentPage, setCurrentPage] = useState('home'); // Başlangıçta ana sayfa görünsün

  // Sayfalar arasında geçiş yapmak için fonksiyonlar
  const goToHome = () => setCurrentPage('home');
  const goToAbout = () => setCurrentPage('about');
  const goToContact = () => setCurrentPage('contact');
  const goToLogin = () => setCurrentPage('login');
  const goToRegister = () => setCurrentPage('register');

  return (
    <div className="page-container">
      {/* Navbar bölümü */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand mx-auto" href="#home">CRM Sistemi</a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto mx-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home" onClick={goToHome}>Ana Sayfa</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={goToAbout}>Hakkımızda</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={goToContact}>İletişim</a>
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

      {/* Sayfa İçeriği */}
      <div className="content">
        {currentPage === 'home' && (
          <div>
            <h2>Ana Sayfa</h2>
            <p>Burada ana sayfa içeriği olacak.</p>
          </div>
        )}

        {currentPage === 'about' && (
          <div>
            <h2>Hakkımızda</h2>
            <p>Burada hakkımızda bölümü olacak.</p>
          </div>
        )}

        {currentPage === 'contact' && (
          <div>
            <h2>İletişim</h2>
            <p>Burada iletişim bölümü olacak.</p>
          </div>
        )}

        {currentPage === 'login' && <LoginPage goToRegister={goToRegister} />}
        {currentPage === 'register' && <RegisterPage goToLogin={goToLogin} />}
      </div>
    </div>
  );
}

export default App;
