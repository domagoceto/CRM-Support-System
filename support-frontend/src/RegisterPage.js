import React, { useState } from 'react';
import './RegisterPage.css';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Şifreler uyuşmuyor!');
      return;
    }
    console.log('Kayıt Bilgileri:', formData);
    alert('Kayıt başarılı!');
  };

  return (
    <div className="register-page-container">
      <div className="register-form">
        <h3 className="text-center mb-4">Kayıt Ol</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Ad</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Adınızı girin"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="surname" className="form-label">Soyad</label>
            <input
              type="text"
              className="form-control"
              id="surname"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              required
              placeholder="Soyadınızı girin"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Telefon Numarası</label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Telefon numaranızı girin"
            />
          </div>
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
              placeholder="Şifrenizi oluşturun"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Şifreyi Onayla</label>
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
          <button type="submit" className="btn btn-primary w-100">Kayıt Ol</button>
        </form>
        <p>
          Zaten bir hesabınız var mı? <a href="/login">Giriş Yap</a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
