import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AdminProfile.css'; // Profil sayfasına özel stil dosyası (isteğe bağlı)

const AdminProfile = () => {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState({});

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setAdmin(user);
    }
  }, []);

  const handleGeri = () => {
    navigate('/adminPanel');
  };

  return (
    <div className="profile-container">
      <h2>Profil Bilgilerim</h2>
      <div className="profile-info">
        <p><strong>Ad:</strong> {admin.ad}</p>
        <p><strong>Email:</strong> {admin.email}</p>
        <p><strong>Rol:</strong> {admin.rol || 'Admin'}</p>
      </div>
      <button className="btn btn-primary" onClick={handleGeri}>
        Geri Dön
      </button>
    </div>
  );
};

export default AdminProfile;
