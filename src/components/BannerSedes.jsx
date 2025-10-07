// src/components/BannerSedes.jsx
import React from 'react';
import '../styles/BannerSedes.css';
import { FaDumbbell, FaRunning, FaMusic, FaUsers } from 'react-icons/fa';

const services = [
  { id: 'muscu', title: 'MUSCULACIÓN', text: 'Rutinas personalizadas con seguimiento profesional para fuerza y tonificación.', Icon: FaDumbbell },
  { id: 'cross', title: 'CROSSFIT', text: 'Entrenamientos funcionales de alta intensidad para rendimiento y comunidad.', Icon: FaRunning },
  { id: 'zumba', title: 'ZUMBA', text: 'Clases rítmicas y divertidas para mejorar cardio y coordinación.', Icon: FaMusic },
  { id: 'func', title: 'FUNCIONAL', text: 'Movimientos cotidianos para fuerza, equilibrio y postura.', Icon: FaUsers },
];

const schedule = [
  { day: 'LUNES', hours: '08:00 - 22:00' },
  { day: 'MARTES', hours: '08:00 - 22:00' },
  { day: 'MIÉRCOLES', hours: '08:00 - 22:00' },
  { day: 'JUEVES', hours: '08:00 - 22:00' },
  { day: 'VIERNES', hours: '08:00 - 22:00' },
  { day: 'SÁBADOS', hours: '09:00 - 14:00' },
  { day: 'DOMINGO', hours: 'CERRADO' },
];

const BannerSedes = () => {
  return (
    <section className="banner-sedes-container" aria-labelledby="bs-title">
      <div className="banner-sedes-inner">
        <div className="banner-sedes-left">
          <h2 id="bs-title" className="bs-title">NUESTRA MISIÓN</h2>
          <p className="bs-lead">
            Ofrecer un espacio integral para el bienestar físico y emocional. Clases guiadas, seguimiento personalizado y comunidad para que el entrenamiento sea sostenible.
          </p>

          <div className="bs-services">
            {services.map(s => {
              const Icon = s.Icon;
              return (
                <article className="bs-service-card" key={s.id}>
                  <div className="bs-service-icon" aria-hidden="true">
                    <Icon />
                  </div>
                  <div className="bs-service-content">
                    <h3 className="bs-service-title">{s.title}</h3>
                    <p className="bs-service-text">{s.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <aside className="banner-sedes-right" aria-label="Horarios y contacto">
          <div className="bs-side-card">
            <h3 className="bs-side-title">HORARIOS DE ATENCIÓN</h3>
            <ul className="bs-schedule">
              {schedule.map(s => (
                <li key={s.day} className="bs-schedule-item">
                  <span className="bs-day">{s.day}</span>
                  <span className="bs-hours">{s.hours}</span>
                </li>
              ))}
            </ul>

            <div className="bs-cta">
              <a className="bs-cta-button" href="/planes#planes">CONSULTAR PLANES</a>
              <p className="bs-cta-note">Contactanos por llamada o WhatsApp y te orientamos.</p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default BannerSedes;
