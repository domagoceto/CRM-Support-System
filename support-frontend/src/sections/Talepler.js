import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // React Router'dan useNavigate import ediyoruz
import '../styles/Talepler.css'; // Stil dosyasını unutma

const Talepler = () => {
  const [talepler, setTalepler] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // useNavigate hook'unu kullanıyoruz

  useEffect(() => {
    const fetchTalepler = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:8080/api/support/destek-talepleri', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setTalepler(response.data);
      } catch (error) {
        console.error("Destek talepleri alınamadı:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTalepler();
  }, []);

  const handleBackClick = () => {
    navigate(-1); // Bir önceki sayfaya gitmek için kullanılır
  };

  if (loading) return <p>Yükleniyor...</p>;

  return (
    <div className="talepler-wrapper">
      {/* Navbar */}
      <div className="navbar">
        <h2>Destek Talepleri</h2>
        <button className="back-btn" onClick={handleBackClick}>Geri</button> {/* Geri butonuna tıklama işlevi eklendi */}
      </div>

      <div className="talepler-container">
        <h2>📋 Tüm Destek Talepleri</h2>
        {talepler.length === 0 ? (
          <p>Hiç destek talebi bulunamadı.</p>
        ) : (
          <div className="talepler-grid">
            {talepler.map((talep, i) => (
              <div key={i} className="talepler-card">
                <h4>{talep.konu}</h4>
                <p><strong>Mesaj:</strong> {talep.mesaj}</p>
                <p><strong>Tarih:</strong> {talep.olusturulmaTarihi || "Bilinmiyor"}</p>
                <hr />
                {talep.kullanici ? (
                  <>
                    <p><strong>Ad:</strong> {talep.kullanici.name}</p>
                    <p><strong>Soyad:</strong> {talep.kullanici.surname}</p>
                    <p><strong>Email:</strong> {talep.kullanici.email}</p>
                    <p><strong>Telefon:</strong> {talep.kullanici.phone}</p>
                  </>
                ) : (
                  <p><em>Kullanıcı bilgisi bulunamadı.</em></p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <footer>
        <p>© 2025 CRM Support Sistemi</p>
      </footer>
    </div>
  );
};

export default Talepler;
