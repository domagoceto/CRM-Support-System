import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/LoginPage.css';

const LoginPage = ({ setUser, openRegister }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const userData = { email: formData.email, password: formData.password };

    const response = await fetch("http://localhost:8080/api/kullanici/giris", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    });

    if (!response.ok) {
        const errorData = await response.json();
        alert(errorData.error || "Giriş başarısız.");
        return;
    }

    const data = await response.json();

    // Başarılı giriş
    alert(data.message);
    setUser(data);

    switch (data.rol) {
        case "CUSTOMER":
            navigate("/userPanel");
            break;
        case "123":
            navigate("/supportPanel");
            break;
        case "789":
            navigate("/adminPanel");
            break;
        default:
            alert("Rol bilgisi tanınmadı, yönlendirme yapılamıyor.");
    }
};

  
  

  return (
    <div className="login-page-container">
      <h1>Giriş Yap</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">E-posta</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="E-posta adresinizi girin"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Şifre</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Şifrenizi girin"
            required
          />
        </div>

        <button type="submit">Giriş Yap</button>
      </form>

      {message && (
        <div
          style={{
            marginTop: '10px',
            color: message.includes('başarılı') ? 'green' : 'red',
          }}
        >
          {message}
        </div>
      )}

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
