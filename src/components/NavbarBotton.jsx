import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

const NavbarBotton = () => {
    const navigate = useNavigate();
    return (

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
            </div>
        </div>
    )
}

export default NavbarBotton


