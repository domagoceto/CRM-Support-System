import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/UserPanel.css';

const UserPanel = ({ user }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Kullanıcı çıkışı işlemi
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="user-panel-container">
      <h1>Hoş Geldiniz, {user?.ad || 'Kullanıcı'}!</h1>
      <p>Bu sizin kullanıcı panelinizdir. Buradan randevularınızı yönetebilir, hizmetleri inceleyebilirsiniz.</p>

      <div className="panel-buttons">
        <button onClick={() => navigate('/appointments')}>Randevularım</button>
        <button onClick={() => navigate('/services')}>Hizmetleri Görüntüle</button>
        <button onClick={handleLogout}>Çıkış Yap</button>
      </div>
    </div>
  );
};

export default UserPanel;
