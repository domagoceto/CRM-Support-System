import React, { useState } from 'react';
import axios from 'axios';
import '../styles/RegisterPage.css';

const RegisterPage = ({ goToLogin }) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [key, setKey] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== passwordConfirmation) {
      setError('Şifreler eşleşmiyor.');
      return;
    }

    try {
      const userData = {
        name,
        surname,
        phone,
        email,
        key,
        password,
      };

      await axios.post('/api/kullanici/kayit', userData);
      alert('Kayıt başarılı!');
      goToLogin(); // Kayıttan sonra giriş formuna geç
    } catch (err) {
      setError('Bir hata oluştu. Lütfen tekrar deneyin.');
    }
  };

  return (
    <div className="register-container">
      <h2>Kayıt Ol</h2>
      {error && <div className="error">{error}</div>}

      <form onSubmit={handleRegister}>
        <div className="input-group">
          <label>Ad</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="input-group">
          <label>Soyad</label>
          <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} required />
        </div>
        <div className="input-group">
          <label>Telefon</label>
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>
        <div className="input-group">
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="input-group">
          <label>Key (Opsiyonel)</label>
          <input type="text" value={key} onChange={(e) => setKey(e.target.value)} />
        </div>
        <div className="input-group">
          <label>Şifre</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div className="input-group">
          <label>Şifre Tekrarı</label>
          <input type="password" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} required />
        </div>
        <button type="submit" className="register-btn">Kayıt Ol</button>
      </form>

      <p style={{ textAlign: 'center', marginTop: '12px' }}>
        Zaten hesabınız var mı?{' '}
        <a href="#" onClick={(e) => {
          e.preventDefault();
          goToLogin(); // Giriş formuna geç
        }}>
          Giriş yap
        </a>
      </p>
    </div>
  );
};

export default RegisterPage;
