// src/components/NavbarBotton.jsx
import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/NavbarBotton.css';

const NavbarBotton = () => {
    const navigate = useNavigate();
    return (
        <div className="navbar-botton w-100">
            <div className="container-btn-botton d-flex justify-content-evenly align-items-center">
                <button
                    className="btn btn-navbar-botton"
                    onClick={() => navigate('/formulario')}
                >
                    Registrar Turno
                </button>
                <button
                    className="btn btn-navbar-botton"
                    onClick={() => navigate('/tabla')}
                >
                    Ver los turnos
                </button>
            </div>
        </div>
    )
}

export default NavbarBotton


