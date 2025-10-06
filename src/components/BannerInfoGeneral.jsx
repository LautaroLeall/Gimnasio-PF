import React from 'react';
import '../styles/BannerInfoGeneral.css'; // Nuevo archivo de estilos
import { FaDumbbell, FaClock, FaCalendarAlt } from "react-icons/fa"; // Iconos para el gimnasio
// Si usas react-icons/bs como en el original, puedes cambiar:
// import { BsArrowRightCircleFill, BsCalendarCheck, BsHourglassSplit } from "react-icons/bs";

const BannerInfoGeneral = ({
  title,
  description,
  ctaText,
  ctaLink,
  features, // Array de objetos para las características
  iconComponent: IconComponent // Opcional: para un icono principal diferente
}) => {
  return (
    <div className="banner-info-container">
      {/* Columna Izquierda: Información Principal y CTA */}
      <div className="banner-info-left">
        <h1 className="banner-info-title">{title}</h1>
        <p className="banner-info-description">{description}</p>
        <a href={ctaLink} className="banner-info-cta-button">
          {ctaText}
        </a>
      </div>

      {/* Columna Derecha: Características Destacadas */}
      <div className="banner-info-right">
        {/* Puedes añadir un icono principal o una imagen aquí si lo deseas */}
        {IconComponent && <div className="main-icon-container"><IconComponent size={60} /></div>}

        <div className="banner-info-features">
          {features.map((feature, index) => (
            <div className="banner-feature-item" key={index}>
              <div className="feature-icon-container secondary-icon">
                {/* Asumiendo que el icono se pasa como un componente de React-Icons */}
                {feature.Icon ? <feature.Icon /> : <FaDumbbell />} 
              </div>
              <div className="feature-text">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BannerInfoGeneral;   