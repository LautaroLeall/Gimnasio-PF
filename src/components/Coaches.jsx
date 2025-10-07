import Slider from "react-slick";
import { useState, useRef, useEffect } from "react";
import coachesData from "../api/coachesData";
import NavBar from './NavBar';
import BannerCoaches from './BannerCoaches';
import BannerClases from './BannerClases';
import Footer from './Footer';
import "../styles/Coaches.css";

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
        if (nuevoFiltro === filtro) return;
        setMostrarCards(false);
        setFiltroPendiente(nuevoFiltro);
    };

    useEffect(() => {
        if (!mostrarCards && filtroPendiente !== null) {
            const timeout = setTimeout(() => {
                setFiltro(filtroPendiente);
                setSlideIndex(0);
                setMostrarCards(true);
                setFiltroPendiente(null);
            }, 500);
            return () => clearTimeout(timeout);
        }
    }, [mostrarCards, filtroPendiente]);

    useEffect(() => {
        if (filtro === "Todos") {
            setSlideIndex(0);
            setTimeout(() => {
                sliderRef.current?.slickGoTo(0);
                sliderRef.current?.slickPlay?.();
            }, 0);
        } else {
            sliderRef.current?.slickPause?.();
        }
    }, [filtro]);

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
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    centerPadding: "40px",
                },
            },
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

            <div className="container-fluid container-info-coaches text-white">
                <BannerCoaches />

                {/* Filtros */}
                <div className="coaches-filtros">
                    {["Todos", "Crossfit", "Zumba", "Musculación", "Funcional"].map((tipo) => (
                        <button
                            key={tipo}
                            className={`btn-coaches ${filtro === tipo ? "btn-active" : ""}`}
                            onClick={() => handleFiltroClick(tipo)}
                            aria-pressed={filtro === tipo}
                        >
                            {tipo.toUpperCase()}
                        </button>
                    ))}
                </div>
            </div>

            {/* Sección principal */}
            <div className={`container-coaches fade-zoom-wrapper ${mostrarCards ? "fade-in" : "fade-out"}`} id="equipo">
                {filtro === "Todos" ? (
                    <Slider key="slider" ref={sliderRef} {...settings}>
                        {entrenadoresFiltrados.map((coach, index) => (
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
                    <div className="filtered-container">
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

            <BannerClases />
            <Footer />
        </>
    );
};

export default Coaches;
