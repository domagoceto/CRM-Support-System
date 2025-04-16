import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserNavbar = ({ user, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Çıkış yapmadan önce onay al
    const confirmLogout = window.confirm("Çıkış yapmak istediğinizden emin misiniz?");
    if (confirmLogout) {
      onLogout();
      navigate('/'); // Çıkış yaptıktan sonra ana sayfaya yönlendir
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-tomato">
      <div className="container-fluid">
        <span className="navbar-brand">
          Hoşgeldin, {user?.ad?.charAt(0).toUpperCase() + user?.ad?.slice(1)}
        </span>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button className="btn btn-light" onClick={handleLogout}>Çıkış Yap</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default UserNavbar;
