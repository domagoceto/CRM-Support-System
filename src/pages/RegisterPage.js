import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/RegisterPage.css';

const RegisterPage = ({ openLogin }) => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    key: '',
    phone: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleRegister = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.passwordConfirmation) {
      setError('Şifreler eşleşmiyor');
      return;
    }

    // Key’e göre rol belirleme
    let role = 'CUSTOMER'; // default
    if (formData.key === 'support-key-123') {
      role = 'SUPPORT';
    } else if (formData.key === 'admin-key-456') {
      role = 'ADMIN';
    }

    const payload = {
      ad: formData.name,
      soyad: formData.surname,
      email: formData.email,
      sifre: formData.password,
      telefon: formData.phone,
      rol: role
    };

    try {
      await axios.post('http://localhost:8080/api/kullanici/kayit', payload);
      navigate('/login');
    } catch (err) {
      setError('Bir hata oluştu: ' + (err.response?.data?.message || err.message));
    }
  };

  return (
    <div className="register-container">
      <h1>Kayıt Ol</h1>
      <form onSubmit={handleRegister}>
        <div className="input-group">
          <label htmlFor="name">Ad</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Adınızı Giriniz"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="surname">Soyad</label>
          <input
            type="text"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            placeholder="Soyadınızı Giriniz"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Adresinizi Giriniz"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Şifre</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Şifrenizi Giriniz"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="passwordConfirmation">Şifreyi Onaylayınız</label>
          <input
            type="password"
            name="passwordConfirmation"
            value={formData.passwordConfirmation}
            onChange={handleChange}
            placeholder="Şifreyi Onaylayınız"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="key">Key (Opsiyonel)</label>
          <input
            type="text"
            name="key"
            value={formData.key}
            onChange={handleChange}
            placeholder="Key Giriniz (Opsiyonel)"
          />
        </div>
        <div className="input-group">
          <label htmlFor="phone">Telefon</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Telefon Numaranızı Giriniz"
          />
        </div>
        <button type="submit">Kayıt Ol</button>
      </form>
      <p>
        Zaten hesabınız var mı?{' '}
        <a href="#" onClick={(e) => { e.preventDefault(); openLogin(); }}>
          Giriş Yap
        </a>
      </p>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
};

export default RegisterPage;
