// src/RegisterPage.js
import React from 'react';

const RegisterPage = ({ goToLogin }) => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card p-4 shadow-sm">
            <h3 className="text-center mb-4">Kayıt Ol</h3>
            <form>
              <div className="mb-3">
                <label htmlFor="registerEmail" className="form-label">Email Adresi</label>
                <input type="email" className="form-control" id="registerEmail" placeholder="Email adresinizi girin" required />
              </div>
              <div className="mb-3">
                <label htmlFor="registerPassword" className="form-label">Şifre</label>
                <input type="password" className="form-control" id="registerPassword" placeholder="Şifrenizi girin" required />
              </div>
              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">Şifreyi Onayla</label>
                <input type="password" className="form-control" id="confirmPassword" placeholder="Şifrenizi onaylayın" required />
              </div>
              <button type="submit" className="btn btn-primary w-100">Kayıt Ol</button>
            </form>
            <div className="mt-3 text-center">
              <p>Zaten hesabınız var mı? <a href="#!" onClick={goToLogin}>Giriş Yap</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
