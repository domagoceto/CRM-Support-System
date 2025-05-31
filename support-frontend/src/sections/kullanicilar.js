import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/kullanicilar.css';

const Kullanicilar = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get('http://localhost:8080/api/admin/users', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => setUsers(response.data))
    .catch(error => console.error('Kullanıcılar alınırken hata:', error));
  }, []);

  return (
    <div>
      {/* Navbar */}
      <div className="kullanicilar-navbar">
        <h2>Tüm Kullanıcılar</h2>
        <button onClick={() => navigate('/adminPanel')}>Geri Dön</button>
      </div>

      {/* İçerik */}
      <div className="kullanicilar-container">
        <table className="kullanici-table">
          <thead>
            <tr>
              <th>Ad</th>
              <th>Soyad</th>
              <th>Email</th>
              <th>Telefon</th>
              <th>Rol</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.surname}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.rol}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <footer className="kullanicilar-footer">
        © 2025 CRM Sistemi. Tüm hakları saklıdır.
      </footer>
    </div>
  );
};

export default Kullanicilar;
