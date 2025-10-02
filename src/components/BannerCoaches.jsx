// src/components/BannerCoaches.jsx
import React from 'react';
import '../styles/BannerCoaches.css';

const BannerCoaches = () => {
  return (
    <div className="banner-container">
      <div className="banner-content">
        <h2 className="banner-title">
          ¡ES AHORA! <br />
          TRANSFORMÁ TU CUERPO CON <br />
          <span className="highlight">EL PLAN IDEAL PARA VOS</span>
        </h2>
        <p className="banner-description">
          Accedé hoy mismo a cualquiera de nuestras sedes y entrená con el equipo que ya eligieron
          más de 5.000 personas en Tucumán.
        </p>
        <button className="banner-button">
          Agenda tu entrevista gratuita con un entrenador
        </button>
      </div>
    </div>
  );
};

export default BannerCoaches;