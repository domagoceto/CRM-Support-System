import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSignOutAlt, FaUser, FaInbox, FaUsers } from 'react-icons/fa';
import '../styles/AdminPanel.css';

const AdminPanel = () => {
  const [kullaniciAdi, setKullaniciAdi] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setKullaniciAdi(user.ad);
    } else {
      setKullaniciAdi('Admin');
    }
  }, []);

  const handleLogout = () => {
    const isConfirmed = window.confirm("Çıkış yapmak istediğinizden emin misiniz?");
    if (isConfirmed) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      navigate('/');
    }
  };

  // Yalnızca 3 kart
  const cards = [
    { icon: <FaUser size={28} />, label: 'Profilim', path: '/AdminPanel/profil' },
    { icon: <FaInbox size={28} />, label: 'Destek Talepleri', path: '/AdminPanel/AdminTalepler' },
    { icon: <FaUsers size={28} />, label: 'Kullanıcılar', path: '/AdminPanel/kullanicilar' },
  ];

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <div className="admin-panel">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <span className="navbar-brand">
            Hoşgeldiniz, {kullaniciAdi || "Admin"}
          </span>
          <button className="btn custom-logout-btn" onClick={handleLogout}>
            <FaSignOutAlt /> Çıkış Yap
          </button>
        </div>
      </nav>

      <div className="content">
        <div className="card-container">
          {cards.map((card, index) => (
            <div className="card" key={index} onClick={() => handleCardClick(card.path)} style={{ cursor: 'pointer' }}>
              <div className="icon">{card.icon}</div>
              <h4>{card.label}</h4>
              <p>{card.label} sayfasına git</p>
            </div>
          ))}
        </div>
      </div>

      <footer className="footer">
        2025 CRM Sistemi. Tüm hakları saklıdır.
      </footer>
    </div>
  );
};

export default AdminPanel;
