// src/components/BannerPlanes.jsx
import React from 'react';
import '../styles/BannerPlanes.css';
import { BsArrowRightCircleFill } from "react-icons/bs";

const BannerPlanes = () => {
  return (
    <div className="banner-planes-container">
      <div className="banner-planes-left">
        <h1 className="banner-planes-title">¡TRANSFORMA TU CUERPO CON NUESTROS PLANES!</h1>
        <p className="banner-planes-description">
          Descubrí nuestros planes diseñados para potenciar tu rendimiento. En RC Gym, creamos un espacio motivador y profesional, pensado para ayudarte a superar tus metas y sentirte mejor cada día. ¡Únete a nuestra comunidad y transforma tu cuerpo y mente!
        </p>
        <a href="/sedes#sedes" className="banner-planes-cta-button">Conoce todas nuestas sedes</a>
      </div>

      <div className="banner-planes-right">
        <div className="banner-planes-features">
          <div className="banner-feature-item">
            <div className="feature-icon-container green-icon">
              <BsArrowRightCircleFill />
            </div>
            <div className="feature-text">
              <h3 className="feature-title">INSTALACIONES DE PRIMER NIVEL</h3>
              <p className="feature-description">Entrena con equipos de última tecnología y disfruta de un ambiente diseñado para maximizar tu rendimiento y comodidad.</p>
            </div>
          </div>
          <div className="banner-feature-item">
            <div className="feature-icon-container green-icon">
              <BsArrowRightCircleFill />
            </div>
            <div className="feature-text">
              <h3 className="feature-title">ENTRENADORES PROFESIONALES</h3>
              <p className="feature-description">Recibe guía personalizada de expertos en fitness, listos para acompañarte en cada paso de tu transformación.</p>
            </div>
          </div>
          <div className="banner-feature-item">
            <div className="feature-icon-container green-icon">
              <BsArrowRightCircleFill />
            </div>
            <div className="feature-text">
              <h3 className="feature-title">CLASES GRUPALES MOTIVADORAS</h3>
              <p className="feature-description">Desde yoga hasta HIIT, participa en una variedad de clases que se adaptan a tus objetivos y te mantienen inspirado.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerPlanes;