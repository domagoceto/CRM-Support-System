import React, { useState, useEffect } from 'react';
import './styles/UserPanel.css'; // CSS dosyasını import ediyoruz
import axios from 'axios'; // axios kullanacağız
import { useNavigate } from 'react-router-dom'; // useNavigate kullanacağız

const UserPanel = () => {
  const [user, setUser] = useState(null); // Kullanıcı bilgileri
  const [phone, setPhone] = useState(''); // Telefon numarası
  const [password, setPassword] = useState(''); // Şifre
  const [newRequest, setNewRequest] = useState(''); // Yeni talep
  const [requests, setRequests] = useState([]); // Talepler
  const [loading, setLoading] = useState(true); // Yükleniyor durumu

  const navigate = useNavigate(); // Yönlendirme işlemi için

  useEffect(() => {
    // Şu an mock bir kullanıcı verisi alıyoruz
    const mockUser = {
      name: "Ali",
      surname: "Veli",
      email: "ali@veli.com",
      licenses: ["Lisans 1", "Lisans 2"],
      phone: "1234567890"
    };
    
    setUser(mockUser); // Kullanıcıyı set et
    setPhone(mockUser.phone); // Telefonu set et
    setLoading(false); // Yükleme tamamlandı
  }, []);

  const handleUpdateInfo = () => {
    alert('Bilgiler güncellendi.');
    navigate('/'); // Ana sayfaya yönlendiriyoruz
  };

  const handleRequestSubmit = () => {
    if (!newRequest.trim()) return;

    const mockRequest = {
      id: requests.length + 1,
      text: newRequest,
      reviewed: false
    };

    setRequests(prev => [...prev, mockRequest]);
    setNewRequest('');
  };

  const handleReview = (id) => {
    setRequests(prev =>
      prev.map(req =>
        req.id === id ? { ...req, reviewed: true } : req
      )
    );
  };

  if (loading) {
    return <div>Yükleniyor...</div>;
  }

  if (!user) {
    return <div>Kullanıcı bulunamadı. Giriş yapmanız gerekebilir.</div>;
  }

  return (
    <div className="user-panel-container">
      <h2 className="welcome-message">Hoş geldin, {user.name}</h2>

      <div className="user-panel-sections">
        <div className="panel-section left-panel">
          <h4>Profil Bilgileri</h4>
          <p><strong>Ad:</strong> {user.name}</p>
          <p><strong>Soyad:</strong> {user.surname}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Lisanslar:</strong> {user.licenses.join(', ')}</p>

          <div className="input-group">
            <label>Telefon:</label>
            <input value={phone} onChange={e => setPhone(e.target.value)} />
          </div>
          <div className="input-group">
            <label>Şifre:</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          <button className="update-btn" onClick={handleUpdateInfo}>Güncelle</button>
        </div>

        <div className="panel-section center-panel">
          <h4>Destek Talebi Oluştur</h4>
          <textarea value={newRequest} onChange={e => setNewRequest(e.target.value)} placeholder="Destek talebinizi buraya yazın..." />
          <button className="request-btn" onClick={handleRequestSubmit}>Gönder</button>
        </div>

        <div className="panel-section right-panel">
          <h4>Geçmiş Talepler</h4>
          {requests.length === 0 ? (
            <p>Henüz talep yok.</p>
          ) : (
            <ul>
              {requests.map((req) => (
                <li key={req.id}>
                  {req.text}
                  <br />
                  <small>Durum: {req.reviewed ? 'Değerlendirildi' : 'Beklemede'}</small>
                  {!req.reviewed && (
                    <button onClick={() => handleReview(req.id)}>Değerlendir</button>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserPanel;
