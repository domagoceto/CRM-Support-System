import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginPage.css';

const LoginPage = ({ setUser, openRegister }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { name: 'Kullanıcı Adı', email: formData.email };
    setUser(userData);
    navigate('/main');
  };

  return (
    <div className="login-page-container">
      <h1>Giriş Yap</h1> {/* Başlık */}
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">E-posta</label> {/* Etiket */}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="E-posta adresinizi girin" // Placeholder
            required
          />

        </div>

        <div className="input-group">
          <label htmlFor="password">Şifre</label> {/* Etiket */}
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Şifrenizi girin"  // Placeholder
            required
          />

        </div>

        <button type="submit">Giriş Yap</button> {/* Giriş Yap Butonu */}
      </form>
      <p>
        Hesabınız yok mu?{' '}
        <a href="#" onClick={(e) => { e.preventDefault(); openRegister(); }}>
          Kayıt Ol
        </a>
      </p>
    </div>
  );
};

export default LoginPage;
