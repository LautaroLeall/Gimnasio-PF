// src/components/Sedes.jsx
import { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import '../styles/Sedes.css';
import NavBar from './NavBar';
import BannerSedes from './BannerSedes';
import Footer from './Footer';
import imgSedes1 from '/sedes/imgsedes1.jpg';
import imgSedes2 from '/sedes/imgsedes2.jpg';
import imgSedes3 from '/sedes/imgsedes3.jpg';
import imgSedes4 from '/sedes/imgsedes4.jpg';

const gymLocations = [
  {
    id: 'barrio norte',
    name: 'SEDE BARRIO NORTE',
    address: 'SAN MARTÍN 001',
    description:
      'LG GYM Central: 25 años de trayectoria en el corazón de la ciudad. Entrená sin desvíos, entrená con expertos.',
    schedule: {
      lunesAViernes: '08:00 - 23:00',
      sabados: '09:00 - 13:30 / 16:00 - 20:00',
    },
    image:
      imgSedes1,
  },
  {
    id: 'barrio-sur',
    name: 'SEDE BARRIO SUR',
    address: 'LAS HERAS 001',
    description:
      'Disfruta de nuestras modernas instalaciones en Barrio Sur. Un espacio diseñado para tu bienestar y rendimiento.',
    schedule: {
      lunesAViernes: '07:00 - 22:00',
      sabados: '10:00 - 14:00',
    },
    image:
      imgSedes3,
  },
  {
    id: 'peron',
    name: 'SEDE PERÓN',
    address: 'AV. PERÓN 001',
    description:
      'Entrena en nuestra sede de la Av. Perón y pon a prueba nuestra meta de competir contra el tiempo.',
    schedule: {
      lunesAViernes: '08:00 - 23:00',
      sabados: '09:00 - 13:30 / 16:00 - 20:00',
    },
    image:
      imgSedes2,
  },
  {
    id: 'aconquija',
    name: 'SEDE AVENIDA ACONQUIJA',
    address: 'AVENIDA ACONQUIJA 001',
    description:
      'La sede ideal para quienes buscan entrenar en un entorno dinámico y con equipamiento de última generación sobre la Avenida Aconquija.',
    schedule: {
      lunesAViernes: '09:00 - 21:00',
      sabados: '09:00 - 13:00',
    },
    image:
      imgSedes4,
  },
];

const Sedes = () => {
  // selección actual
  const [selectedLocation, setSelectedLocation] = useState(gymLocations[0]);

  // Estados nuevos para animación (misma idea que Coaches)
  const [mostrarLocation, setMostrarLocation] = useState(true);
  const [pendingLocation, setPendingLocation] = useState(null);

  // Handler al hacer click: dispara fade-out y guarda sede pendiente
  const handleLocationClick = (location) => {
    if (location.id === selectedLocation.id) return;
    setMostrarLocation(false); // inicia fade-out
    setPendingLocation(location);
  };

  // Cuando termina la animación de salida, aplicamos el cambio y hacemos fade-in
  useEffect(() => {
    if (!mostrarLocation && pendingLocation !== null) {
      const timeout = setTimeout(() => {
        setSelectedLocation(pendingLocation);
        setPendingLocation(null);
        setMostrarLocation(true); // fade-in
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [mostrarLocation, pendingLocation]);

  return (
    <>
      <NavBar />

      <div className="container-fluid container-info-sedes text-white">
        <div className="title-section">
          <h2 className="title-section-sedes">LAS 4 MEJORES SEDES EN TUCUMÁN</h2>
          <h3 className="subtitle-section-sedes">SIEMPRE CERCA DE USTEDES</h3>
          <p className="description-section-sedes text-center mx-auto">
            Máxima libertad y disponibilidad. Elegí tu gimnasio base y disfrutá de la red más grande de la ciudad.
          </p>

          <div className="location-buttons my-5" id="sedes">
            {gymLocations.map((location) => (
              <button
                key={location.id}
                className={`location-button ${selectedLocation.id === location.id ? 'active' : ''}`}
                onClick={() => handleLocationClick(location)} // uso del handler con animación
                aria-pressed={selectedLocation.id === location.id}
              >
                {/* Simple label (podés personalizar) */}
                {location.name.replace('SEDE ', '')}
              </button>
            ))}
          </div>
        </div>

        <div className={`location-info-wrapper ${mostrarLocation ? 'fade-in' : 'fade-out'}`}>
          <div className="location-info-section">
            <div className="location-image-container" aria-hidden={!mostrarLocation}>
              <img
                src={selectedLocation.image}
                alt={`Sede ${selectedLocation.name}`}
                className="location-image"
                loading="lazy"
              />
            </div>

            <div className="location-details">
              <h4 className="location-details__name">{selectedLocation.name}</h4>
              <p className="location-details__address">{selectedLocation.address}</p>
              <p className="location-details__description">{selectedLocation.description}</p>

              <div className="location-details__schedule">
                <h5><i className="fas fa-clock" aria-hidden="true"></i> Horarios</h5>
                <p><strong>Lunes a Viernes:</strong> {selectedLocation.schedule.lunesAViernes}</p>
                <p><strong>Sábados:</strong> {selectedLocation.schedule.sabados}</p>
              </div>

              <div className="location-details__actions justify-content-center">
                <HashLink smooth to="/home#form" className="btn-secondary text-decoration-none">
                  Ver Clases
                </HashLink>
                <a href='#' className="btn-primary text-decoration-none">¡Inscribirme ahora!</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="banner-sedes-section mb-5">
        <BannerSedes />
      </section>

      <Footer />
    </>
  );
};

export default Sedes;




