// src/components/LandingPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LandingPage.css';

const LandingPage = () => {
    return (
        <div className="landing-container">
            <div className="container text-white">
                <div className="row justify-content-center align-items-center min-vh-100">

                    {/* Columna de Información */}
                    <div className="col-md-5">
                        <div className="landing-text-content">
                            <div className="title-container">
                                <p className="main-title">BIENVENIDO A</p>
                                <p className="brand-title">GYM-LG</p>
                            </div>
                            <div className="subtitle-container mt-4">
                                <p className="subtitle">Tu viaje hacia una mejor versión de ti mismo comienza aquí. Accede a planes personalizados, sigue tu progreso y conecta con los mejores entrenadores.</p>
                                <p className="subtitle fw-bold mt-3">Enfócate, entrena y logra resultados reales.</p>
                            </div>
                        </div>
                    </div>

                    {/* Línea separadora vertical */}
                    <div className="col-md-1 d-none d-md-flex justify-content-center">
                        <div className="linea-separadora-vertical"></div>
                    </div>

                    {/* Columna de Acciones (Login/Registro) */}
                    <div className="col-md-5 text-center">
                        <div className="action-container">
                            <h2 className="action-title mb-4">¿Listo para empezar?</h2>
                            <p className="action-subtitle mb-5">Crea una cuenta o inicia sesión para acceder a todo el contenido.</p>
                            <div className="d-grid gap-3">
                                <Link to="/register" className="btn btn-custom-green btn-lg">
                                    REGISTRARSE
                                </Link>
                                <Link to="/login" className="btn btn-outline-custom-green btn-lg">
                                    INICIAR SESIÓN
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;