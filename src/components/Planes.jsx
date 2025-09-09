// Planes.jsx

import React, { useState } from 'react';
import '../styles/Planes.css';

const planesData = {
  'BARRIO NORTE': [
    { title: 'MENSUAL', subtitle: 'PLAN FLEXIBLE', price: '$50.000', description: 'Ideal para aquellos que quieren tener su primer acercamiento a la familia RC.', isFeatured: false },
    { title: 'TRIMESTRAL', subtitle: 'COMPROMISO QUE RINDE', price: '$127.500', description: 'Entrená 3 meses con un solo pago. Perfecto para establecer una rutina constante.', isFeatured: false },
    { title: 'SEMESTRAL', subtitle: 'MEJOR PRECIO-BENEFICIO', price: '$240.000', description: 'Plan ideal para quienes ya están decididos a buscar su bienestar. Ahorro y constancia asegurada.', isFeatured: true }
  ],
  'YERBA BUENA': [
    { title: 'MENSUAL', subtitle: 'PLAN FLEXIBLE', price: '$55.000', description: 'Ideal para aquellos que quieren tener su primer acercamiento a la familia RC.', isFeatured: false },
    { title: 'TRIMESTRAL', subtitle: 'COMPROMISO QUE RINDE', price: '$140.000', description: 'Entrená 3 meses con un solo pago. Perfecto para establecer una rutina constante.', isFeatured: false },
    { title: 'ANUAL', subtitle: 'LA MEJOR OPCIÓN', price: '$400.000', description: 'Máximo ahorro y el mejor compromiso con tu bienestar. Sin interrupciones.', isFeatured: true }
  ],
  'BARRIO SUR': [
    { title: 'MENSUAL', subtitle: 'PLAN ESENCIAL', price: '$45.000', description: 'Plan perfecto para empezar y ver resultados.', isFeatured: false },
    { title: 'TRIMESTRAL', subtitle: 'COMPROMISO INTENSO', price: '$120.000', description: '3 meses de entrenamiento enfocado en tus metas.', isFeatured: false },
    { title: 'SEMESTRAL', subtitle: 'PLAN ELITE', price: '$230.000', description: 'Acceso completo a todas las instalaciones. El plan más popular.', isFeatured: true }
  ],
  'TAFÍ VIEJO': [
    { title: 'MENSUAL', subtitle: 'PLAN INICIAL', price: '$40.000', description: 'Comienza tu viaje fitness con este plan flexible.', isFeatured: false },
    { title: 'TRIMESTRAL', subtitle: 'PLAN AVANZADO', price: '$110.000', description: 'Da el siguiente paso con este plan que te dará constancia.', isFeatured: false },
    { title: 'ANUAL', subtitle: 'PLAN TOTAL', price: '$380.000', description: 'La opción de mayor ahorro y beneficios exclusivos.', isFeatured: true }
  ],
  'TERRAZAS': [
    { title: 'MENSUAL', subtitle: 'PLAN BASE', price: '$60.000', description: 'Acceso a las instalaciones del gimnasio Terrazas.', isFeatured: false },
    { title: 'TRIMESTRAL', subtitle: 'PLAN PREMIUM', price: '$150.000', description: 'Incluye acceso a clases especiales y servicios adicionales.', isFeatured: false },
    { title: 'SEMESTRAL', subtitle: 'TODO INCLUIDO', price: '$250.000', description: 'Acceso ilimitado y personalizado con un entrenador.', isFeatured: true }
  ],
};

const Planes = () => {
  const [activeSede, setActiveSede] = useState('YERBA BUENA');

  const handleSedeClick = (sede) => {
    setActiveSede(sede);
  };

  const currentPlanes = planesData[activeSede] || [];

  return (
    <div className="planes-container-full">
      <div className="main-title-container">
        <h1 className="main-title">ELEGÍ TU SEDE</h1>
        <h2 className="main-subtitle">Y CONOCÉ LOS PRECIOS</h2>
      </div>

      <div className="location-tabs">
        {Object.keys(planesData).map((sede) => (
          <button
            key={sede}
            className={`tab-button ${activeSede === sede ? 'active' : ''}`}
            onClick={() => handleSedeClick(sede)}
          >
            {sede}
          </button>
        ))}
      </div>

      <section className="planes-section">
        <div className="planes-cards-container">
          {currentPlanes.map((plan, index) => (
            <div key={index} className={`plan-card ${plan.isFeatured ? 'featured-plan' : ''}`}>
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
              <a href="#" className="plan-button">Quiero este plan</a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Planes;