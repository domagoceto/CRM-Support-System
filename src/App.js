import './App.css';
import React, { useState } from 'react';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS import edilmelidir

const App = () => {
  const [isLoginPage, setIsLoginPage] = useState(true); // Başlangıçta login sayfası gözükecek

  // Kayıt sayfasına geçiş
  const goToRegister = () => {
    setIsLoginPage(false);
  };

  // Giriş sayfasına geçiş
  const goToLogin = () => {
    setIsLoginPage(true);
  };

  return (
    <div>
      {isLoginPage ? (
        <LoginPage goToRegister={goToRegister} />
      ) : (
        <RegisterPage goToLogin={goToLogin} />
      )}
    </div>
  );
}

export default App;
