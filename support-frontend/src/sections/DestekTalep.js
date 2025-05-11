import React, { useState } from 'react';
import axios from 'axios';
import '../styles/DestekTalep.css';

const DestekTalep = () => {
  const [formData, setFormData] = useState({
    konu: '',
    mesaj: '',
    lisans: ''
  });

  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');
    if (!token) {
      setMessage("Giriş yapılmamış. Lütfen önce giriş yapın.");
      return;
    }

    setLoading(true);

    try {
      await axios.post(
        'http://localhost:8080/api/destek-talep/talep',
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      setMessage('Destek talebiniz başarıyla gönderildi.');
      setFormData({ konu: '', mesaj: '', lisans: '' }); // Formu sıfırla
    } catch (error) {
      console.error('Destek talebi hatası:', error);
      setMessage('Destek talebiniz gönderilemedi, lütfen tekrar deneyin.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="destek-talep-wrapper">
      <div className="destek-talep-navbar">
        <div className="navbar-title">Destek Sistemi</div>
        <button className="back-button" onClick={() => window.history.back()}>
          Geri Dön
        </button>
      </div>

      <div className="destek-talep-container">
        <h2 className="form-header">Destek Talebi Oluştur</h2>
        <form className="support-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="konu"
            value={formData.konu}
            onChange={handleChange}
            placeholder="Konu"
            required
          />
          <textarea
            name="mesaj"
            value={formData.mesaj}
            onChange={handleChange}
            placeholder="Mesajınız"
            required
          />
          <input
            type="text"
            name="lisans"
            value={formData.lisans}
            onChange={handleChange}
            placeholder="Lisans Bilgisi"
            required
          />
          <button type="submit" className="btn-submit" disabled={loading}>
            {loading ? 'Gönderiliyor...' : 'Gönder'}
          </button>
        </form>

        {message && (
          <p
            style={{
              marginTop: '10px',
              color: message.includes('başarı') ? 'green' : 'red',
              textAlign: 'center'
            }}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default DestekTalep;
