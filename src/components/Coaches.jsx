// src/components/Coaches.jsx
import Slider from "react-slick";
import { useState, useRef, useEffect } from "react";
import "../styles/Coaches.css";
import coachesData from "../api/coachesData";

const Coaches = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const [filtro, setFiltro] = useState("Todos");
    const [mostrarCards, setMostrarCards] = useState(true);
    const [filtroPendiente, setFiltroPendiente] = useState(null);
    const sliderRef = useRef(null);

    const entrenadoresFiltrados =
        filtro === "Todos"
            ? coachesData
            : coachesData.filter(
                (coach) => coach.especialidad.toLowerCase() === filtro.toLowerCase()
            );

    const handleFiltroClick = (nuevoFiltro) => {
        if (nuevoFiltro === filtro) return; // No hacer nada si se repite
        setMostrarCards(false); // Oculta cards actuales con animación
        setFiltroPendiente(nuevoFiltro);
    };

    useEffect(() => {
        if (!mostrarCards && filtroPendiente !== null) {
            const timeout = setTimeout(() => {
                setFiltro(filtroPendiente);
                setSlideIndex(0);
                setMostrarCards(true);
                setFiltroPendiente(null);
            }, 500); // Tiempo para animar salida (fade+zoom)
            return () => clearTimeout(timeout);
        }
    }, [mostrarCards, filtroPendiente]);

    const settings = {
        centerMode: true,
        centerPadding: "100px",
        slidesToShow: 3,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
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
            {/* Texto y filtros */}
            <div className="container-fluid text-white mt-5">
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
                                className={`btn btn-outline-${filtro === tipo ? "success" : "secondary"}`}
                                id="boton1"
                                onClick={() => handleFiltroClick(tipo)}
                            >
                                {tipo.toUpperCase()}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Cards */}
            <div className={`container-coaches mt-5 mb-5 fade-zoom-wrapper ${mostrarCards ? "fade-in" : "fade-out"}`}>
                {filtro === "Todos" ? (
                    <Slider ref={sliderRef} {...settings}>
                        {entrenadoresFiltrados.map((coach, index) => (
                            <div
                                className={`coach-card ${index === slideIndex ? "active" : ""} ${filtro === "Todos" ? "carousel-mode" : ""}`}
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
                            <div key={index} className="coach-card active">
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
        </>
    );
};

export default Coaches;