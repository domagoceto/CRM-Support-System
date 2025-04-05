// RegisterPage.js
import React, { useState } from 'react';
import './RegisterPage.css';

const RegisterPage = ({ goToLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [isRegistered, setIsRegistered] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password === formData.confirmPassword) {
      // Simüle edilmiş kayıt işlemi
      setIsRegistered(true);
      alert("Kayıt başarılı!");
      goToLogin();
    } else {
      alert("Şifreler uyuşmuyor!");
    }
  };

  return (
    <div className="register-page-container">
      <div className="register-form">
        <h3 className="text-center mb-4">Kayıt Ol</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Adresi</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email adresinizi girin"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Şifre</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Şifrenizi girin"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Şifreyi Tekrar Girin</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              placeholder="Şifrenizi tekrar girin"
            />
          </div>
          <button type="submit" className="btn w-100">Kayıt Ol</button>
        </form>
        <p>
          Zaten hesabınız var mı? <button onClick={goToLogin}>Giriş Yap</button>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
