import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = ({ openLogin }) => {
  const [formData, setFormData] = useState({ name: '', surname: '', email: '', password: '', passwordConfirmation: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleRegister = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.passwordConfirmation) {
      setError('Şifreler eşleşmiyor');
      return;
    }
    try {
      // Kayıt işlemi yapılır (API isteği örneği)
      // await axios.post('/api/kullanici/kayit', formData);
      navigate('/login');
    } catch (err) {
      setError('Bir hata oluştu');
    }
  };

  return (
    <div className="register-container">
      <form onSubmit={handleRegister}>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        <input type="text" name="surname" value={formData.surname} onChange={handleChange} required />
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        <input type="password" name="passwordConfirmation" value={formData.passwordConfirmation} onChange={handleChange} required />
        <button type="submit">Kayıt Ol</button>
      </form>
      <p>
        Zaten hesabınız var mı?{' '}
        <a href="#" onClick={(e) => { e.preventDefault(); openLogin(); }}>
          Giriş Yap
        </a>
      </p>
      {error && <div>{error}</div>}
    </div>
  );
};

export default RegisterPage;
