import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/DestekTalep.css';

const DestekTalep = ({ user }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    konu: '',
    mesaj: '',
    lisans: ''
  });

  const [lisanslar, setLisanslar] = useState([
    'Lisans A',
    'Lisans B',
    'Lisans C'
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const talepVerisi = {
      ad: user.ad,
      email: user.email,
      ...formData
    };
    console.log('Destek talebi gönderildi:', talepVerisi);
    alert('Destek talebiniz başarıyla gönderildi!');
    // Burada API isteği gönderilebilir
  };

  const handleBack = () => {
    navigate('/userpanel');
  };

  return (
    <div className="destek-talep-wrapper">
      <div className="destek-talep-navbar">
        <span className="navbar-title">Destek Talep</span>
        <button className="back-button" onClick={handleBack}>Geri</button>
      </div>

      <div className="destek-talep-container">
        <form onSubmit={handleSubmit} className="support-form">
            <h2 className="form-header">Talep Oluştur</h2>

        
            <div className="form-group">
            <label htmlFor="lisans"></label>
            <select name="lisans" value={formData.lisans} onChange={handleChange} required>
                <option value="">Lisans Seçiniz</option>
                {lisanslar.map((lisans, i) => (
                <option key={i} value={lisans}>{lisans}</option>
                ))}
            </select>
            </div>

            <input
            type="text"
            name="konu"
            placeholder="Konu"
            value={formData.konu}
            onChange={handleChange}
            required
            />

            <textarea
            name="mesaj"
            placeholder="Mesajınız"
            rows="6"
            value={formData.mesaj}
            onChange={handleChange}
            required
            />
            <button type="submit" className="btn-submit">Gönder</button>
        </form>
        </div>


      <div className="destek-talep-footer">
        <p>&copy; 2025 CRM Support. Tüm hakları saklıdır.</p>
      </div>
    </div>
  );
};

export default DestekTalep;
