import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/UserProfile.css';

const UserProfile = ({ user }) => {
  const [editField, setEditField] = useState(null);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate(); // React Router için navigate hook'u

  useEffect(() => {
    if (user) {
      setFormData({ ...user });
    }
  }, [user]);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleEditClick = (field) => {
    setEditField(field);
  };

  const handleCancel = () => {
    setFormData({ ...user });
    setEditField(null);
  };

  const handleSave = (field) => {
    console.log('Güncellenen veri:', formData[field]);
    setEditField(null);
    // API isteği yapılabilir
  };

  const handleBack = () => {
    navigate('/userpanel'); // UserPanel'e yönlendir
  };

  const renderField = (label, field, type = "text") => (
    <div className="profile-row" key={field}>
      <label>{label}:</label>
      {editField === field ? (
        <div className="edit-group">
          <input
            type={type}
            value={formData[field] || ""}
            onChange={(e) => handleChange(field, e.target.value)}
          />
          <button className="btn btn-save" onClick={() => handleSave(field)}>Kaydet</button>
          <button className="btn btn-cancel" onClick={handleCancel}>İptal</button>
        </div>
      ) : (
        <div className="display-group">
          <span>{field === "sifre" ? "******" : formData[field]}</span>
          <button className="btn btn-edit" onClick={() => handleEditClick(field)}>Güncelle</button>
        </div>
      )}
    </div>
  );
  

  return (
    <div className="user-profile-wrapper">
      {/* Navbar */}
      <div className="user-profile-navbar">
        <span className="navbar-title">Profilim</span>
        <button className="back-button" onClick={handleBack}>Geri</button>
      </div>

      {/* User Profile Content */}
      <div className="user-profile-container">
        <h2 className="profile-title">Bilgilerim</h2>
        <div className="profile-left">
          {renderField("Ad", "ad")}
          {renderField("Soyad", "soyad")}
          {renderField("Email", "email")}
          {renderField("Telefon", "telefon")}
          {renderField("Şifre", "sifre", "password")}
        </div>
      </div>

      {/* Footer */}
      <div className="user-profile-footer">
        <p>&copy; 2025 CRM Sistemi. Tüm hakları saklıdır.</p>
      </div>
    </div>
  );
};

export default UserProfile;
