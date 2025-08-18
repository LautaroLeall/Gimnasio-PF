// src/components/NavBar.jsx
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../styles/Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const NavBar = () => {
    const navigate = useNavigate();
    const [hidden, setHidden] = useState(false);
    let lastScroll = 0;

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.pageYOffset;
            if (currentScroll > lastScroll && currentScroll > 100) {
                // Bajando
                setHidden(true);
            } else {
                // Subiendo
                setHidden(false);
            }
            lastScroll = currentScroll;
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`navbar navbar-dark navbar-expand-lg ${hidden ? 'hidden' : ''}`}>
            <h1 className="navbar-brand ms-5" id="logo" onClick={() => navigate('/')}>
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

            <div className="collapse navbar-collapse me-5" id="navbarNav">
                <div className="container-btn d-flex flex-lg-row flex-column align-items-lg-center w-100">
                    <div className="container-btn d-flex gap-5 flex-column flex-lg-row align-items-lg-center w-100 justify-content-lg-center">
                        <button
                            className="btn btn-outline-secondary"
                            id="boton1"
                            onClick={() => navigate('/formulario')}
                        >
                            Registrar Turno
                        </button>
                        <button
                            className="btn btn-outline-secondary"
                            id="boton1"
                            onClick={() => navigate('/tabla')}
                        >
                            Ver los turnos
                        </button>
                        <button
                            className="btn btn-outline-secondary"
                            id="boton1"
                            onClick={() => navigate('/sedes')}
                        >
                            Sedes
                        </button>
                        <button
                            className="btn btn-outline-secondary"
                            id="boton1"
                            onClick={() => navigate('/coaches')}
                        >
                            Entrenadores
                        </button>
                    </div>
                    <h1 className="navbar-brand" id="SobreNosotros" onClick={() => navigate('/sobre-nosotros')}>
                        <span>Sobre</span>Nosotros
                    </h1>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
