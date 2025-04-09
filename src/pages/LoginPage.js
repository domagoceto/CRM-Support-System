import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        <button type="submit">Giriş Yap</button>
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
