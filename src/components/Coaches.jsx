// src/components/Coaches.jsx
import Slider from "react-slick";
import { useState, useRef, useEffect } from "react";
import NavBar from './NavBar';
import BannerCoaches from './BannerCoaches';
import Footer from './Footer';
import "../styles/Coaches.css";
import coachesData from "../api/coachesData";

const Coaches = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const [filtro, setFiltro] = useState("Todos");
    const [mostrarCards, setMostrarCards] = useState(true);
    const [filtroPendiente, setFiltroPendiente] = useState(null);
    const sliderRef = useRef(null);

    // Lista filtrada según el filtro actual
    const entrenadoresFiltrados =
        filtro === "Todos"
            ? coachesData
            : coachesData.filter(
                (coach) => coach.especialidad.toLowerCase() === filtro.toLowerCase()
            );

    // Cuando se hace clic en un filtro: dispara la animación de salida y guarda el filtro pendiente
    const handleFiltroClick = (nuevoFiltro) => {
        if (nuevoFiltro === filtro) return; // nada si es el mismo filtro
        setMostrarCards(false); // aplica fade-out
        setFiltroPendiente(nuevoFiltro);
    };

    // Efecto que realiza el cambio real de filtro después de la animación de salida
    useEffect(() => {
        if (!mostrarCards && filtroPendiente !== null) {
            const timeout = setTimeout(() => {
                setFiltro(filtroPendiente);
                setSlideIndex(0);
                setMostrarCards(true); // fade-in
                setFiltroPendiente(null);
            }, 500); // 500ms para la animación de salida
            return () => clearTimeout(timeout);
        }
    }, [mostrarCards, filtroPendiente]);

    // Reiniciar slider cuando volvemos a "Todos"
    useEffect(() => {
        if (filtro === "Todos") {
            // resetear índice
            setSlideIndex(0);
            // forzamos al slider a ir al 0 y reanudar autoplay (esperamos al render)
            setTimeout(() => {
                sliderRef.current?.slickGoTo(0);
                sliderRef.current?.slickPlay?.();
            }, 0);
        } else {
            // si entramos en modo filtrado, pausamos autoplay por si acaso
            sliderRef.current?.slickPause?.();
        }
    }, [filtro]);

    // Pausa/autoplay al hover solo cuando estamos en carousel y sobre la card activa
    const handleMouseEnter = (index) => {
        if (filtro === "Todos" && index === slideIndex) {
            sliderRef.current?.slickPause();
        }
    };
    const handleMouseLeave = (index) => {
        if (filtro === "Todos" && index === slideIndex) {
            sliderRef.current?.slickPlay();
        }
    };

    const settings = {
        centerMode: true,
        centerPadding: "100px",
        slidesToShow: 3,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        beforeChange: (current, next) => setSlideIndex(next),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "0px",
                },
            },
        ],
    };

    return (
        <>
            <NavBar />

            {/* Texto y filtros */}
            <div className="container-fluid container-info-coaches text-white mt-5">
                {/* Textos principales */}
                <div className="row justify-content-center align-items-center">
                    <div className="col-5">
                        <div className="text-coaches">
                            <div className="first-container-text">
                                <p className="first-text">ENTRENADORES</p>
                                <p className="first-text">EXPERTOS PARA</p>
                            </div>
                            <div className="second-container-text">
                                <p className="second-text">MAXIMIZAR TU</p>
                                <p className="second-text">RENDIMIENTO</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-1 linea-separadora"></div>

                    <div className="col-5">
                        <div className="text-coaches2">
                            <p className="third-text fw-bold mb-2">Tu éxito es nuestra misión</p>
                            <p className="third-text mb-2">Accede al plan más completo de GYM-LG.</p>
                            <p className="third-text mb-2">¡No te pierdas!</p>
                            <p className="third-text mb-2">El método más efectivo para mejorar tu mejor versión.</p>
                            <p className="third-text mb-2">Con foco, seguimiento y resultados reales.</p>
                        </div>
                    </div>
                </div>

                {/* Botones de filtro */}
                <div className="row mt-5">
                    <div className="col-12 d-flex align-items-center justify-content-center gap-5 flex-wrap">
                        {["Todos", "Crossfit", "Zumba", "Musculación", "Funcional"].map((tipo) => (
                            <button
                                key={tipo}
                                // clase activa clara: btn-active (CSS maneja .btn-coaches.btn-active)
                                className={`btn-coaches ${filtro === tipo ? "btn-active" : ""}`}
                                onClick={() => handleFiltroClick(tipo)}
                                aria-pressed={filtro === tipo}
                            >
                                {tipo.toUpperCase()}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Cards: wrapper con clase que controla la animación fade+zoom */}
            <div className={`container-coaches fade-zoom-wrapper ${mostrarCards ? "fade-in" : "fade-out"}`}>
                {filtro === "Todos" ? (
                    <Slider key="slider" ref={sliderRef} {...settings}>
                        {entrenadoresFiltrados.map((coach, index) => (
                            // Agregado key para cada slide (importante)
                            <div
                                key={coach.nombre + index}
                                className={`coach-card ${index === slideIndex ? "active" : ""} ${filtro === "Todos" ? "carousel-mode" : ""}`}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={() => handleMouseLeave(index)}
                            >
                                <div className="image-container">
                                    <img src={coach.imagen} alt={coach.nombre} className="coach-img" />
                                    <div className="overlay">
                                        <h5>{coach.nombre}</h5>
                                        <p><strong>{coach.especialidad}</strong></p>
                                        <p>{coach.descripcion}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                ) : (
                    <div className="filtered-container d-flex justify-content-center gap-5 flex-wrap">
                        {entrenadoresFiltrados.map((coach, index) => (
                            <div key={coach.nombre + index} className="coach-card active">
                                <div className="image-container">
                                    <img src={coach.imagen} alt={coach.nombre} className="coach-img" />
                                    <div className="overlay">
                                        <h5>{coach.nombre}</h5>
                                        <p><strong>{coach.especialidad}</strong></p>
                                        <p>{coach.descripcion}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <BannerCoaches />
            <Footer />
        </>
    );
};

export default Coaches;
