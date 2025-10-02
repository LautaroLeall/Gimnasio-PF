// src/components/NavBar.jsx
import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { FiLogOut } from "react-icons/fi";
import logo from '/LGlogo.png';
import '../styles/Navbar.css';

const NavBar = () => {
    const navigate = useNavigate();
    const [hidden, setHidden] = useState(false);
    const [isFixed, setIsFixed] = useState(false);
    const navbarRef = useRef(null);
    const lastScroll = useRef(0);
    const ticking = useRef(false)
    const hideThreshold = 100;

    useEffect(() => {
        const handleScroll = () => {
            if (!ticking.current) {
                ticking.current = true;
                window.requestAnimationFrame(() => {
                    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

                    if (navbarRef.current) {
                        if (currentScroll > navbarRef.current.offsetHeight) {
                            setIsFixed(true);
                        } else {
                            setIsFixed(false);
                        }
                    }

                    if (currentScroll > lastScroll.current && currentScroll > hideThreshold) {
                        setHidden(true);
                    } else {
                        setHidden(false);
                    }

                    lastScroll.current = currentScroll <= 0 ? 0 : currentScroll;
                    ticking.current = false;
                });
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        lastScroll.current = window.pageYOffset || document.documentElement.scrollTop;
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <nav
                ref={navbarRef}
                className={`navbar navbar-dark navbar-expand-lg ${hidden ? 'hidden' : ''} ${isFixed ? 'fixed' : ''}`}
            >
                <div className="container-fluid d-flex align-items-center">
                    {/* Logo a la izquierda */}
                    <img
                        src={logo}
                        alt="Logo"
                        className="navbar-brand logo-navbar"
                        onClick={() => navigate('/home')}
                    />

                    {/* Título a la izquierda */}
                    <h1 className="navbar-brand m-0 title-navbar" onClick={() => navigate('/home')}>
                        <span>GYM</span>NASIO
                    </h1>

                    {/* Botón Hamburguesa para móviles */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavContent"
                        aria-controls="navbarNavContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Contenedor Colapsable */}
                    <div className="collapse navbar-collapse" id="navbarNavContent">
                        {/* GRUPO DE BOTONES CENTRALES */}
                        <ul className="navbar-nav navbar-center w-100 justify-content-center">
                            <li className="nav-item">
                                <button className="btn-navbar-link btn" onClick={() => navigate('/sedes')}>
                                    Sedes
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className="btn-navbar-link btn" onClick={() => navigate('/planes')}>
                                    Planes
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className="btn-navbar-link btn" onClick={() => navigate('/coaches')}>
                                    Entrenadores
                                </button>
                            </li>
                        </ul>

                        {/* GRUPO DE BOTONES A LA DERECHA */}
                        <ul className="navbar-nav ms-auto align-items-center gap-4">
                            <li className="nav-item">
                                <h1 className="navbar-brand m-0 nav-sobre-nosotros" onClick={() => navigate('/sobre-nosotros')}>
                                    <span>Sobre</span>Nosotros
                                </h1>
                            </li>
                            <li className="nav-item">
                                <button className="btn-logout btn" onClick={() => navigate('/')}>
                                    <FiLogOut />
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Placeholder para mantener el espacio cuando el navbar es fixed */}
            {isFixed && <div style={{ height: navbarRef.current?.offsetHeight }} />}
        </>
    );
};

export default NavBar;
