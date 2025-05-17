import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SupportPanel.css';
import { FaUsers, FaClipboardList, FaComments, FaSignOutAlt } from 'react-icons/fa';

const SupportPanel = ({ supportUser, onLogout }) => {
  const navigate = useNavigate();

  const cards = [
  { icon: <FaUsers size={28} />, label: 'Kullanıcılar', path: '/supportPanel/kullanicilar' },
  { icon: <FaClipboardList size={28} />, label: 'Tüm Destek Talepleri', path: '/supportPanel/destek-talepleri' },
  { icon: <FaComments size={28} />, label: 'Mesajlar', path: '/supportPanel/mesajlar' },
];


  return (
    <div className="support-panel-container" style={{ paddingTop: '100px' }}>
      {/* Support Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <span className="navbar-brand">Hoşgeldin, {supportUser?.ad || "Destek Yetkilisi"}</span>
          <button className="btn custom-logout-btn" onClick={onLogout}>
            <FaSignOutAlt /> Çıkış Yap
          </button>
        </div>
      </nav>

      <h2 className="panel-title">Destek Paneli</h2>
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
      <footer className="footer-support">
        <p>© 2025 CRM Support. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
};

export default SupportPanel;
