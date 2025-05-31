import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/AdminTalepler.css';

const AdminTalepler = () => {
  const [talepler, setTalepler] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get('http://localhost:8080/api/admin/destek-talepleri', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      setTalepler(response.data);
    })
    .catch(error => {
      console.error('Destek talepleri alınırken hata:', error);
    });
  }, []);

  const geriDon = () => {
    window.history.back();
  };

  return (
    <div className="talepler-wrapper">
      {/* Navbar */}
      <div className="talepler-navbar">
        <h2>Destek Talepleri</h2>
        <button onClick={geriDon}>Geri</button>
      </div>

      {/* İçerik */}
      <div className="talepler-container">
        {talepler.length === 0 ? (
          <p>Hiç destek talebi bulunamadı.</p>
        ) : (
          <table className="talepler-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Email</th>
                <th>Konu</th>
                <th>Mesaj</th>
                <th>Tarih</th>
              </tr>
            </thead>
            <tbody>
              {talepler.map((talep) => (
                <tr key={talep.id}>
                  <td>{talep.id}</td>
                  <td>{talep.kullanici?.email || 'Bilinmiyor'}</td>
                  <td>{talep.konu}</td>
                  <td>{talep.mesaj}</td>
                  <td>{new Date(talep.tarih).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Footer */}
      <div className="talepler-footer">
        <p>&copy; 2025 CRM Sistemi. Tüm hakları saklıdır.</p>
      </div>
    </div>
  );
};

export default AdminTalepler;
