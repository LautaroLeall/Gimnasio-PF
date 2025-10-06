import React from 'react';
import BannerInfoGeneral from './BannerInfoGeneral';
import { FaClock, FaCalendarAlt, FaUsers, FaRunning } from "react-icons/fa";
// O con los iconos de tu componente original
// import { BsCalendarCheck, BsHourglassSplit, BsPeopleFill, BsSpeedometer2 } from "react-icons/bs";


const SeccionPrincipal = () => {
  const clasesFeatures = [
    { 
      Icon: FaRunning, 
      title: "VARIEDAD GARANTIZADA", 
      description: "Descubre clases desde Yoga y Pilates hasta Box y Crossfit." 
    },
    { 
      Icon: FaCalendarAlt, 
      title: "HORARIOS FLEXIBLES", 
      description: "Encuentra el momento perfecto para entrenar, mañanas, tardes y noches." 
    },
    { 
      Icon: FaUsers, 
      title: "AMBIENTE MOTIVADOR", 
      description: "Entrena en grupo con la energía y el apoyo de tus compañeros." 
    },
  ];

  return (
    <div>
      <BannerInfoGeneral
        title="CLASES GRUPALES: ¡SÚMATE AL MOVIMIENTO!"
        description="Explora nuestra amplia agenda de clases grupales. Es la forma más divertida y efectiva de mantenerte en forma. ¡Hay una clase para cada objetivo!"
        ctaText="Ver Agenda Completa"
        ctaLink="#clases"
        features={clasesFeatures}
        iconComponent={FaClock} // Icono principal para la columna derecha
      />
      // ... otros componentes
    </div>
  );
};

export default SeccionPrincipal;