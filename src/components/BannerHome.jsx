// BannerHome.jsx
import React from 'react';
import '../styles/BannerHome.css'; // Asumiendo que los estilos estarán en un archivo BannerHome.css

const BannerHome = () => {
  return (
    <section className="banner-home-section">
      <div className="banner-content-adjusted">
        <div className="banner-text-full-width">
          <h1 className="banner-title">
            ENTRENADORES EXPERTOS PARA USTEDES!<br />
            <span className="banner-highlight">MAXIMIZAR TU RENDIMIENTO</span>
          </h1>
          <p className="banner-description">
            Accede al plan más completo de LG GYM. Sumate a nuestro programa de entrenamiento personalizado:
          </p>
          <ul className="banner-features">
            <li>3 sesiones semanales de entrenamiento personalizado con un entrenador profesional</li> <br />
            <li>Grupos exclusivos de hasta 3 personas por sesión con entrenadores expertos de LG GYM</li> <br />
            <li>Seguimiento 1 a 1 + Planificación estratégica de entrenamiento, nutrición y alimentación, dieta y ejercicios</li>
          </ul>
          <p className="banner-mission">
            El método más efectivo para lograr tu mejor versión, con foco, seguimiento y resultados reales.
            <br />
            Enfócate, entrena y logra resultados reales.
          </p>
          <a href="#" className="banner-button">Conoce a todo el equipo</a>
        </div>
      </div>
    </section>
  );
};

export default BannerHome;