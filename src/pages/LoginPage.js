
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginPage.css';

console.log('goToRegister typeof:', typeof goToRegister);

const LoginPage = ({ setUser, goToRegister }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simülasyon amaçlı giriş işlemi
    const userData = {
      name: 'Kullanıcı Adı',
      surname: 'Kullanıcı Soyadı',
      email: formData.email
    };

    setUser(userData);
    navigate('/main');
  };

  return (
    <div className="login-page-container">
      <div className="login-form">
        <h3 className="text-center mb-4">Giriş Yap</h3>
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
          <button type="submit" className="btn w-100">Giriş Yap</button>
        </form>

        <p className="text-center mt-3">
          Hesabınız yok mu?{' '}
          <a href="#" onClick={(e) => {
            e.preventDefault();
            goToRegister(); // Register formunu aç
          }}>
            Kayıt ol
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
