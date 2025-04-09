import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Main from './sections/Main';
import About from './sections/About';
import Contact from './sections/Contact';

const App = () => {
  const [user, setUser] = useState(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

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
  );
};

export default App;
