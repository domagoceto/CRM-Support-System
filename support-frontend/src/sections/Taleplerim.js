import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/Taleplerim.css";

const Taleplerim = () => {
  const [talepler, setTalepler] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTalepler = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/destek-talep/kullanici", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setTalepler(response.data);
      } catch (error) {
        console.error("Talepler alınırken hata oluştu:", error);
      }
    };

    fetchTalepler();
  }, []);

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark d-flex justify-content-between align-items-center px-4">
        <h2 className="navbar-title">Destek Taleplerim</h2>
        <button className="geri-btn" onClick={() => navigate(-1)}>
          Geri
        </button>
      </nav>

      <div className="talepler-grid mt-4">
        {talepler.map((talep) => (
          <div className="talep-card" key={talep.id}>
            <h3>{talep.konu}</h3>
            <p><strong>Mesaj:</strong> {talep.mesaj}</p>
            <p><strong>Lisans:</strong> {talep.lisans}</p>
            <p><strong>Tarih:</strong> {new Date(talep.tarih).toLocaleString()}</p>
            <p><strong>Durum:</strong> {talep.durum || "Belirtilmemiş"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Taleplerim;
