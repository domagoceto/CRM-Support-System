import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate import edildi
import './LoginPage.css';

const LoginPage = ({ setUser }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate(); // useNavigate hook'u tanımlandı

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simüle edilmiş login işlemi
    const userData = {
      name: 'Kullanıcı Adı',
      surname: 'Kullanıcı Soyadı',
      email: formData.email
    };

    // Giriş başarılı ise
    setUser(userData); // Kullanıcı bilgisini ayarlıyoruz
    navigate('/UserPanel'); // Başarılı giriş sonrası kullanıcı paneline yönlendiriyoruz
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
      </div>
    </div>
  );
};

export default LoginPage;
