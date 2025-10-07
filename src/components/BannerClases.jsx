/* src/components/BannerClases.jsx */
import React from 'react';
import { HashLink } from 'react-router-hash-link';
import '../styles/BannerClases.css';
import { FaRunning, FaCalendarAlt, FaUsers } from 'react-icons/fa';

const BannerClases = ({
  title = 'CLASES GRUPALES:',
  subtitle = '¡SÚMATE AL MOVIMIENTO!',
  description = 'Explora nuestra amplia agenda de clases grupales. Es la forma más divertida y efectiva de mantenerte en forma. ¡Hay una clase para cada objetivo!',
  ctaText = 'Regístrate Ahora a tu Primer Clase',
  features = [
    {
      Icon: FaRunning,
      title: 'VARIEDAD GARANTIZADA',
      description: 'Descubre clases desde Funcional y Zumba hasta Musculación y Crossfit.Encuentra tu estilo de entrenamiento favorito.'
    },
    {
      Icon: FaCalendarAlt,
      title: 'HORARIOS FLEXIBLES',
      description: 'Encuentra el momento perfecto para entrenar, mañanas, tardes y noches.No hay horarios fijos!'
    },
    {
      Icon: FaUsers,
      title: 'AMBIENTE MOTIVADOR',
      description: 'Entrena en grupo con la energía y el apoyo de tus compañeros.Un ambiente motivador para alcanzar tus metas!'
    }
  ],

}) => {
  return (
    <section className="bc-container" aria-label="Clases grupales">
      <div className="bc-inner">
        {/* IZQUIERDA: título + texto + CTA */}
        <div className="bc-left">
          <h2 className="bc-title">{title}</h2>
          <h2 className="bc-subtitle">{subtitle}</h2>
          <p className="bc-desc">{description}</p>
          <HashLink smooth to="/home#form" className="bc-cta">
            {ctaText}
          </HashLink>
        </div>

        {/* DERECHA: icono circular superior + lista de features */}
        <aside className="bc-right" aria-hidden={false}>

          <div className="bc-features">
            {features.map((f, i) => {
              const Icon = f.Icon || FaRunning;
              return (
                <article className="bc-feature" key={i}>
                  <div className="bc-feature-icon">
                    <Icon size={16} />
                  </div>
                  <div className="bc-feature-text">
                    <div className="bc-feature-title">{f.title}</div>
                    <div className="bc-feature-sub">{f.description}</div>
                  </div>
                </article>
              );
            })}
          </div>
        </aside>
      </div>
    </section>
  );
};

export default BannerClases;
