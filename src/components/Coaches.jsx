// src/components/Coaches.jsx
import Slider from "react-slick";
import { useState, useRef } from "react";
import "../styles/Coaches.css";
import imgCoach from "/public/sobre-nosotros.jpg";

const coachesData = [
    {
        nombre: "Lucas Fernández",
        especialidad: "Crossfit",
        descripcion: "Coach con enfoque en fuerza funcional.",
        imagen: imgCoach,
    },
    {
        nombre: "Martina Gómez",
        especialidad: "Zumba",
        descripcion: "Clases explosivas de cardio y diversión.",
        imagen: imgCoach,
    },
    {
        nombre: "Santiago López",
        especialidad: "Musculación",
        descripcion: "Rutinas personalizadas para crecimiento muscular.",
        imagen: imgCoach,
    },
    {
        nombre: "Carla Díaz",
        especialidad: "Funcional",
        descripcion: "Trabajo integral para todas las edades.",
        imagen: imgCoach,
    },
    // Agregá más coaches a gusto
];

const Coaches = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const sliderRef = useRef(null);

    const handleMouseEnter = (index) => {
        if (index === slideIndex) {
            sliderRef.current?.slickPause();
        }
    };

    const handleMouseLeave = (index) => {
        if (index === slideIndex) {
            sliderRef.current?.slickPlay();
        }
    };

    const settings = {
        centerMode: true,
        centerPadding: "100px",
        slidesToShow: 3,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        beforeChange: (current, next) => setSlideIndex(next),
        ref: sliderRef,
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
            <div className="container-fluid text-white mt-3">
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
                    <div className="col-1 linea-separadora">
                    </div>
                    <div className="col-5">
                        <div className="text-coaches2">
                            <p className="third-text fw-bold mb-2">Tu exito es nuestra mision</p>
                            <p className="third-text mb-2">Accede al plan mas completo de GYM-LG.</p>
                            <p className="third-text mb-2">¡No te pierdas!</p>
                            <p className="third-text mb-2">El metodo mas efectivo para mejorar tu mejor version.</p>
                            <p className="third-text mb-2">Con foco, seguimiento y resultados reales.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-coaches mt-3">
                <Slider ref={sliderRef} {...settings}>
                    {coachesData.map((coach, index) => (
                        <div
                            key={index}
                            className={`coach-card ${index === slideIndex ? "active" : ""}`}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={() => handleMouseLeave(index)}
                        >
                            <div className="image-container">
                                <img
                                    src={coach.imagen}
                                    alt={coach.nombre}
                                    className="coach-img"
                                />
                                <div className="overlay">
                                    <h5>{coach.nombre}</h5>
                                    <p><strong>{coach.especialidad}</strong></p>
                                    <p>{coach.descripcion}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
};

export default Coaches;
