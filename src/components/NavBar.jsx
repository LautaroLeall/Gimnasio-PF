// src/components/NavBar.jsx
import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { FiLogOut } from "react-icons/fi";
import '../styles/Navbar.css';

const NavBar = () => {
    const navigate = useNavigate();

    // Estado para ocultar o mostrar el navbar según scroll
    const [hidden, setHidden] = useState(false);

    // Estado para aplicar 'fixed' cuando pasamos cierto scroll
    const [isFixed, setIsFixed] = useState(false);

    // Ref del navbar para medir su altura
    const navbarRef = useRef(null);

    // Ref para almacenar el último scroll y evitar re-render innecesario
    const lastScroll = useRef(0);
    const ticking = useRef(false);

    // Threshold en px antes de empezar a ocultar el navbar
    const hideThreshold = 100;

    useEffect(() => {
        const handleScroll = () => {
            if (!ticking.current) {
                ticking.current = true;

                window.requestAnimationFrame(() => {
                    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

                    // Si el scroll supera la altura del navbar, lo fijamos
                    if (navbarRef.current) {
                        if (currentScroll > navbarRef.current.offsetHeight) {
                            setIsFixed(true);
                        } else {
                            setIsFixed(false);
                        }
                    }

                    // ===== Ocultar / Mostrar navbar al hacer scroll =====
                    if (currentScroll > lastScroll.current && currentScroll > hideThreshold) {
                        // Scroll hacia abajo -> ocultar navbar
                        setHidden(true);
                    } else {
                        // Scroll hacia arriba -> mostrar navbar
                        setHidden(false);
                    }

                    lastScroll.current = currentScroll <= 0 ? 0 : currentScroll;
                    ticking.current = false;
                });
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        // Inicializamos el valor al cargar la página
        lastScroll.current = window.pageYOffset || document.documentElement.scrollTop;

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Navbar */}
            <nav
                ref={navbarRef}
                className={`navbar navbar-dark navbar-expand-lg ${hidden ? 'hidden' : ''} ${isFixed ? 'fixed' : ''}`}
            >
                <h1 className="navbar-brand ms-5" id="logo" onClick={() => navigate('/home')}>
                    <span>GYM</span>NASIO
                </h1>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="container-btn d-flex flex-lg-row flex-column align-items-lg-center w-100">
                    <div className="container-btn d-flex gap-5 flex-column flex-lg-row align-items-lg-center w-100 justify-content-lg-center">
                        <button
                            className="btn btn-outline-secondary"
                            id="boton2"
                            onClick={() => navigate('/sedes')}
                        >
                            Sedes
                        </button>
                        <button
                            className="btn btn-outline-secondary"
                            id="boton2"
                            onClick={() => navigate('/coaches')}
                        >
                            Entrenadores
                        </button>
                    </div>
                </div>

                <div className="collapse navbar-collapse me-4" id="navbarNav">
                    <div className="container-btn d-flex align-items-center">
                        <h1 className="navbar-brand" id="SobreNosotros" onClick={() => navigate('/sobre-nosotros')}>
                            <span>Sobre</span>Nosotros
                        </h1>

                        <button className="btn btn-outline-succes text-white" id="boton2" onClick={() => navigate('/')}>
                            <FiLogOut />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Placeholder para mantener el espacio cuando el navbar es fixed */}
            {isFixed && <div style={{ height: navbarRef.current?.offsetHeight }} />}
        </>
    );
};

export default NavBar;
