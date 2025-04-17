import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserNavbar = ({ user, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Kullanıcı çıkışı onayladı.");
    onLogout();
    navigate('/'); 
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
              {/* Çıkış yapma butonu */}
              <button className="btn btn-light" onClick={handleLogout}>Çıkış Yap</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default UserNavbar;
