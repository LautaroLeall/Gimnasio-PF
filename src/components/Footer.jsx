// src/components/Footer.jsx
import React from 'react';
import '../styles/Footer.css';
import logo from '../assets/LGlogo.png';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">

        <div className="footer-logo-section">
          <img src={logo} alt="LG Logo" className="footer-logo" />
        </div>

        <div className="footer-links-section">
          {/* Aquí puedes agregar enlaces, información de contacto, redes sociales, etc. */}
          <div className="footer-column">
            <h3>Navegación</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#planes">Planes</a></li>
              <li><a href="#equipo">Equipo</a></li>
              <li><a href="#contacto">Contacto</a></li>
              <li><a href="#nosotros">SobreNosotros</a></li>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#preguntas-frecuentes">Preguntas Frecuentes</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Síguenos</h3>
            <ul>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">Github</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
            <hr />
            <ul>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">Github</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>

            </ul>
          </div>
          <div className="footer-column">
            <h3>Contacto</h3>
            <p>Dirección: Calle Falsa 123</p>
            <p>Teléfono: +54 9 11 1234-5678</p>
            <p>Email: info@tudominio.com</p>
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