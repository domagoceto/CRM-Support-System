import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/KullaniciListesi.css';

const KullaniciListesi = () => {
  const [kullanicilar, setKullanicilar] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setError('Token bulunamadı. Lütfen giriş yapın.');
      setLoading(false);
      return;
    }

    axios.get('http://localhost:8080/api/support/kullanicilar', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      setKullanicilar(response.data);
      setLoading(false);
    })
    .catch(error => {
      console.error('Kullanıcılar alınırken hata oluştu:', error);
      setError('Kullanıcılar alınırken hata oluştu.');
      setLoading(false);
    });
  }, []);

  const mesajGonder = (kullanici) => {
    alert(`Mesaj gönderiliyor: ${kullanici.name} ${kullanici.surname}`);
    // Gerçek mesaj gönderme işlemi burada yapılabilir (örneğin bir modal açmak)
  };

  if (loading) return <div>Yükleniyor...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="kullanici-listesi">
      {/* Navbar */}
      <div className="navbar-liste">
        <div className="navbar-title">Kullanıcı Listesi</div>
        <button className="geri-btn" onClick={() => window.history.back()}>Geri</button>
      </div>




      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Ad</th>
            <th>Soyad</th>
            <th>Email</th>
            <th>Telefon</th>
            <th>Rol</th>
            <th>Mesaj</th>
          </tr>
        </thead>
        <tbody>
          {kullanicilar.length === 0 ? (
            <tr>
              <td colSpan="7">Kullanıcı bulunamadı.</td>
            </tr>
          ) : (
            kullanicilar.map(kullanici => (
              <tr key={kullanici.id}>
                <td>{kullanici.id}</td>
                <td>{kullanici.name}</td>
                <td>{kullanici.surname}</td>
                <td>{kullanici.email}</td>
                <td>{kullanici.phone}</td>
                <td>{kullanici.rol}</td>
                <td>
                  <button className="mesaj-btn" onClick={() => mesajGonder(kullanici)}>
                    📩
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Footer */}
      <div className="footer">© 2025 CRM Support Sistemi</div>
    </div>
  );
};

export default KullaniciListesi;
