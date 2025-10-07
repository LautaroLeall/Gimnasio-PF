// src/components/BannerCoaches.jsx
import React from 'react';
import '../styles/BannerCoaches.css';

const BannerCoaches = () => {
  return (
    <div className="banner-container">
      <div className="banner-content">
        <h2 className="banner-coaches-title">
          ¡ES AHORA! <br />
          TRANSFORMÁ TU CUERPO CON <br />
          <span className="highlight">EL PLAN IDEAL PARA VOS</span>
        </h2>
        <p className="banner-coaches-description">
          LG GYM es la comunidad de fitness más grande de Tucumán. Accedé a todas nuestras sedes y entrená con el equipo de los líderes.
        </p>
        <a href="#" className="banner-coaches-button text-decoration-none" target="_blank">
          Agenda tu entrevista gratuita con un entrenador
        </a>
      </div>
    </div>
  );
};

export default BannerCoaches;