// src/components/Footer.jsx
import React from 'react';
import '../styles/Footer.css';
import logo from '/LGlogo.png';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">

        <div className="footer-logo-section">
          <img src={logo} alt="LG Logo" className="footer-logo" />
        </div>

        <div className="footer-links-section">

          <div className="footer-column">
            <h3>Navegación</h3>
            <ul>
              <li>
                <a href="#banner-home">Home</a>
              </li>
              <li>
                <a href="/planes#planes">Planes</a>
              </li>
              <li>
                <a href="/coaches#equipo">Equipo</a>
              </li>
              <li>
                <a href="/sedes#sedes">Sedes</a>
              </li>
              <li>
                <a href="/sobre-nosotros">Sobre Nosotros</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Síguenos</h3>
            <div className="d-flex flex-wrap justify-content-center gap-5">
              <div className="col-gonzalo">
                <ul>
                  <li>
                    <a href="https://www.instagram.com/gonchi_martinezz/" target="_blank" rel="noopener noreferrer">Instagram</a>
                  </li>
                  <li>
                    <a href="https://github.com/GonzaloMartinezz" target="_blank" rel="noopener noreferrer">Github</a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/gonzalomartinezz2004/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  </li>
                </ul>
              </div>

              <div className="col-lautaro">
                <ul>
                  <li>
                    <a href="https://www.instagram.com/lautaro_leall" target="_blank" rel="noopener noreferrer">Instagram</a>
                  </li>
                  <li>
                    <a href="https://github.com/LautaroLeall" target="_blank" rel="noopener noreferrer">Github</a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/lauldp/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()}. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;