// src/components/BannerHome.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/BannerHome.css';

const BannerHome = () => {
  const navigate = useNavigate(); 

  return (
    // Contenedor principal con una clase específica para esta sección
    <section className="banner-split" id="banner-home">
      <div className="container text-white">

        <div className="row justify-content-center align-items-center min-vh-100">

          <div className="col-md-5">
            <div className="banner-split__content">
              <h1 className="banner-title">
                ENTRENADORES EXPERTOS PARA
                <br />
                <span className="banner-highlight">MAXIMIZAR TU RENDIMIENTO</span>
              </h1>
              <p className="banner-description mt-5 mb-5 m-0">
                Accede al plan más completo de LG GYM. Sumate a nuestro programa de entrenamiento personalizado:
              </p>
            </div>
          </div>

          <div className="col-md-1 d-none d-md-flex justify-content-center">
            <div className="banner-split__separator"></div>
          </div>

          <div className="col-md-5">
            <div className="banner-split__details-box">

              <ul className="banner-features">
                <li>3 sesiones semanales de entrenamiento personalizado con un entrenador profesional</li>
                <li>Grupos exclusivos de hasta 3 personas por sesión con entrenadores expertos de LG GYM</li>
                <li>Seguimiento 1 a 1 + Planificación estratégica de entrenamiento, nutrición y alimentación, dieta y ejercicios</li>
              </ul>

              <p className="banner-mission m-0">
                El método más efectivo para lograr tu mejor versión, con foco, seguimiento y resultados reales.
                <br />
                Enfócate, entrena y logra resultados reales.
              </p>

              <div className="text-center mt-4">
                <button onClick={() => navigate('/coaches')} className="banner-button">
                  Conoce a todo el equipo
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerHome;