// src/components/Planes.jsx
import { useState, useEffect } from 'react';
import NavBar from './NavBar';
import BannerPlanes from './BannerPlanes';
import Footer from './Footer';
import '../styles/Planes.css';

const planesData = {
  'BARRIO NORTE': [
    {
      title: 'MENSUAL',
      subtitle: 'PLAN FLEXIBLE',
      price: '$50.000',
      description: 'Ideal para aquellos que quieren tener su primer acercamiento a la familia RC.',
      isFeatured: false
    },
    {
      title: 'TRIMESTRAL',
      subtitle: 'COMPROMISO QUE RINDE',
      price: '$127.500',
      description: 'Entrená 3 meses con un solo pago. Perfecto para establecer una rutina constante.',
      isFeatured: false
    },
    {
      title: 'SEMESTRAL',
      subtitle: 'MEJOR PRECIO-BENEFICIO',
      price: '$240.000',
      description: 'Plan ideal para quienes ya están decididos a buscar su bienestar. Ahorro y constancia asegurada.',
      isFeatured: true
    }

  ],
  'BARRIO SUR': [
    {
      title: 'MENSUAL',
      subtitle: 'PLAN FLEXIBLE',
      price: '$55.000',
      description: 'Ideal para aquellos que quieren tener su primer acercamiento a la familia RC.',
      isFeatured: false
    },
    {
      title: 'TRIMESTRAL',
      subtitle: 'COMPROMISO QUE RINDE',
      price: '$140.000',
      description: 'Entrená 3 meses con un solo pago. Perfecto para establecer una rutina constante.',
      isFeatured: false
    },
    {
      title: 'ANUAL',
      subtitle: 'LA MEJOR OPCIÓN',
      price: '$400.000',
      description: 'Máximo ahorro y el mejor compromiso con tu bienestar. Sin interrupciones.',
      isFeatured: true
    }

  ],
  'PERON': [
    {
      title: 'MENSUAL',
      subtitle: 'PLAN ESENCIAL',
      price: '$45.000',
      description: 'Plan perfecto para empezar y ver resultados.',
      isFeatured: false
    },
    {
      title: 'TRIMESTRAL',
      subtitle: 'COMPROMISO INTENSO',
      price: '$120.000',
      description: '3 meses de entrenamiento enfocado en tus metas.',
      isFeatured: false
    },
    {
      title: 'SEMESTRAL',
      subtitle: 'PLAN ELITE',
      price: '$230.000',
      description: 'Acceso completo a todas las instalaciones. El plan más popular.',
      isFeatured: true
    }

  ],
  'AVENIDA ACONQUIJA': [
    {
      title: 'MENSUAL',
      subtitle: 'PLAN INICIAL',
      price: '$40.000',
      description: 'Comienza tu viaje fitness con este plan flexible.',
      isFeatured: false
    },
    {
      title: 'TRIMESTRAL',
      subtitle: 'PLAN AVANZADO',
      price: '$110.000',
      description: 'Da el siguiente paso con este plan que te dará constancia.',
      isFeatured: false
    },
    {
      title: 'ANUAL',
      subtitle: 'PLAN TOTAL',
      price: '$380.000',
      description: 'La opción de mayor ahorro y beneficios exclusivos.',
      isFeatured: true
    }
  ],
};

const Planes = () => {
  const [activeSede, setActiveSede] = useState('BARRIO NORTE'); // sede inicial
  const [mostrarPlanes, setMostrarPlanes] = useState(true);
  const [pendingSede, setPendingSede] = useState(null);

  const handleSedeClick = (sede) => {
    if (sede === activeSede) return;
    setMostrarPlanes(false);
    setPendingSede(sede);
  };

  useEffect(() => {
    if (!mostrarPlanes && pendingSede !== null) {
      const timeout = setTimeout(() => {
        setActiveSede(pendingSede);
        setPendingSede(null);
        setMostrarPlanes(true);
      }, 500); // mismo tiempo que en Sedes
      return () => clearTimeout(timeout);
    }
  }, [mostrarPlanes, pendingSede]);

  const currentPlanes = planesData[activeSede] || [];

  return (
    <>
      <NavBar />

      <div className="planes-container-full mb-3" id="planes">
        <div className="main-title-container">
          <h1 className="main-title">ELEGÍ TU SEDE</h1>
          <h2 className="main-subtitle">Y CONOCÉ LOS PRECIOS</h2>
        </div>

        {/* Botones de sedes */}
        <div className="location-tabs my-5">
          {Object.keys(planesData).map((sede) => (
            <button
              key={sede}
              className={`tab-button ${activeSede === sede ? 'active' : ''}`}
              onClick={() => handleSedeClick(sede)}
              aria-pressed={activeSede === sede}
            >
              {sede}
            </button>
          ))}
        </div>

        {/* Igual animación que Sedes */}
        <div className={`planes-info-wrapper ${mostrarPlanes ? 'fade-in' : 'fade-out'}`}>
          <div className="planes-cards-container" aria-hidden={!mostrarPlanes}>
            {currentPlanes.map((plan, i) => (
              <div key={plan.title + i} className={`plan-card ${plan.isFeatured ? 'featured-plan' : ''}`}>
                <div className="plan-content">
                  <div className="plan-header">
                    <h3 className="plan-title">{plan.title}</h3>
                    <p className="plan-subtitle">{plan.subtitle}</p>
                  </div>
                  <div className="plan-body">
                    <p className="plan-price">{plan.price}</p>
                    <p className="plan-info">Matrícula incluida</p>
                    <p className="plan-description">{plan.description}</p>
                  </div>
                </div>
                <a href="#" target="_blank" className="plan-button">Quiero este plan</a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="banner-plan-section mb-5">
        <BannerPlanes />
      </section>

      <Footer />
    </>
  );
};

export default Planes;
