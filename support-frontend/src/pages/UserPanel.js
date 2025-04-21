import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/UserPanel.css';
import { FaUser, FaHeadset, FaInbox, FaComments } from 'react-icons/fa';

const UserPanel = ({ user, onLogout }) => {
  const navigate = useNavigate();

  const cards = [
    { icon: <FaUser size={28} />, label: 'Profilim', path: '/userPanel/profil' },
    { icon: <FaHeadset size={28} />, label: 'Destek Talep Et', path: '/userPanel/destek-talep' },
    { icon: <FaInbox size={28} />, label: 'Destek Taleplerim', path: '/userPanel/destek-taleplerim' },
    { icon: <FaComments size={28} />, label: 'Mesajlar', path: '/userPanel/mesajlar' },
  ];

  return (
    <div className="user-panel-container" style={{ paddingTop: '100px' }}>
      {/* User Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand">Hoşgeldin, {user?.ad}</span> {/* Kullanıcı adı burada gösteriliyor */}
          <button className="btn custom-logout-btn" onClick={onLogout}>Çıkış Yap</button>
        </div>
      </nav>

      <h2 className="panel-title">Kullanıcı Paneli</h2>
      <p className="panel-subtitle">Yapmak istediğiniz işlemi seçin.</p>

      <div className="panel-buttons">
        {cards.map((card, index) => (
          <div className="panel-card" key={index} onClick={() => navigate(card.path)}>
            {card.icon}
            <span>{card.label}</span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="footer-user">
        <p>© 2025 CRM Support. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
};

export default UserPanel;
