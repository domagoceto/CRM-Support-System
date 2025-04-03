// src/LoginPage.js
import React from 'react';

const LoginPage = ({ goToRegister }) => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card p-4 shadow-sm">
            <h3 className="text-center mb-4">Giriş Yap</h3>
            <form>
              <div className="mb-3">
                <label htmlFor="loginEmail" className="form-label">Email Adresi</label>
                <input type="email" className="form-control" id="loginEmail" placeholder="Email adresinizi girin" required />
              </div>
              <div className="mb-3">
                <label htmlFor="loginPassword" className="form-label">Şifre</label>
                <input type="password" className="form-control" id="loginPassword" placeholder="Şifrenizi girin" required />
              </div>
              <button type="submit" className="btn btn-primary w-100">Giriş Yap</button>
            </form>
            <div className="mt-3 text-center">
              <p>Hesabınız yok mu? <a href="#!" onClick={goToRegister}>Kayıt Ol</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
