import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Main from './sections/Main';
import About from './sections/About';
import Contact from './sections/Contact';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

const App = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [user, setUser] = useState(null);

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

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={<HomePage goToLogin={goToLogin} goToRegister={goToRegister} />} 
        />
        <Route path="/main" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {isLoginOpen && (
        <div className="form-popup-box">
          <button className="close-btn" onClick={closeForms}>X</button>
          <LoginPage setUser={setUser} goToRegister={goToRegister} />
        </div>
      )}

      {isRegisterOpen && (
        <div className="form-popup-box">
          <button className="close-btn" onClick={closeForms}>X</button>
          <RegisterPage goToLogin={goToLogin} />
        </div>
      )}
    </Router>
  );
};

export default App;
