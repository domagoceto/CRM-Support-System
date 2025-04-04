import React from 'react';

const HomePage = () => {
  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>CRM Support Sistemi</h1>
        <p>IT firmalarına lisans sattığınız müşterilerle kolay destek yönetimi</p>
        <div className="hero-buttons">
          <button className="btn">Kayıt Ol</button>
          <button className="btn">Giriş Yap</button>
        </div>
      </header>

      <section className="features-section">
        <h2>Özellikler</h2>
        <div className="features">
          <div className="feature-box">
            <h3>Kolay Destek Yönetimi</h3>
            <p>Lisanslı müşterilerinizden gelen destek taleplerini anlık yönetin.</p>
          </div>
          <div className="feature-box">
            <h3>Gelişmiş Takip</h3>
            <p>Tüm destek geçmişinizi zaman damgalı olarak görüntüleyin.</p>
          </div>
          <div className="feature-box">
            <h3>Bildirim Sistemi</h3>
            <p>SMS ve e-posta ile anında bilgilendirme imkanı.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
