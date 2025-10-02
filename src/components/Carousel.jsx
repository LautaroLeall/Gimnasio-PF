// src/components/Carousel.jsx
import { useRef, useEffect } from 'react';
import NavBar from './NavBar';
import BannerHome from './BannerHome';
import Form from './Form';
import PartnersTable from './PartnersTable';
import NavbarBotton from './NavbarBotton';
import Footer from './Footer';
import '../styles/Carousel.css';

const Carousel = ({
    vista,
    agregarSocio,
    socioEditado,    
    actualizarSocio, 
    modoEdicion,      
    cancelarEdicion, 
    socios,       
    eliminarSocio,     
    editarSocio   
}) => {
    const formRef = useRef(null);
    const tablaRef = useRef(null); 

    // useEffect que se ejecuta cada vez que cambia la vista
    // Si vista es 'formulario', hace scroll hacia el formulario
    // Si vista es 'tabla', hace scroll hacia la tabla
    useEffect(() => {
        if (vista === 'formulario') {
            formRef.current?.scrollIntoView({ behavior: 'smooth' });
        } else if (vista === 'tabla') {
            tablaRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [vista]);

    // Función para hacer scroll hacia la tabla desde el formulario
    const scrollToTabla = () => {
        tablaRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    // Función para hacer scroll hacia el formulario desde la tabla
    const scrollToForm = () => {
        formRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <NavBar />
            <section className="contenedor-carousel">

                {/* Sección con efecto parallax de bienvenida */}
                <section className="parallax-1">
                    <div className="parallax-inner d-flex justify-content-center align-items-center h-100">
                        <h1 className="title-img">Bienvenidos a Nuestro Gimnasio</h1>
                    </div>
                </section>

                {/* Sección de banner */}
                <section>
                    <BannerHome />
                </section>

                {/* Sección con efecto parallax antes del formulario */}
                <section className="parallax-2">
                    <div className="parallax-inner">
                        <h1 className="title-img">Registrar Turnos</h1>
                    </div>
                </section>

                {/* Sección del formulario con referencia para hacer scroll */}
                <section className="form" ref={formRef}>
                    <Form
                        agregarSocio={agregarSocio}
                        socioEditado={socioEditado}
                        actualizarSocio={actualizarSocio}
                        modoEdicion={modoEdicion}
                        cancelarEdicion={cancelarEdicion}
                        socios={socios}
                        scrollToTabla={scrollToTabla} // Permite que el formulario haga scroll hacia la tabla
                    />
                </section>

                {/* Sección con efecto parallax antes de la tabla */}
                <section className="parallax-3">
                    <div className="parallax-inner">
                        <h1 className="title-img">Ver Turnos</h1>
                    </div>
                </section>

                {/* Sección de la tabla con referencia para hacer scroll */}
                <section className="table" ref={tablaRef}>
                    <PartnersTable
                        socios={socios}
                        eliminarSocio={eliminarSocio}
                        editarSocio={editarSocio}
                        scrollToForm={scrollToForm} // Permite que la tabla haga scroll hacia el formulario
                    />
                </section>
            </section>
            <section className='navbar-bottom d-flex justify-content-center align-items-center'>
                <NavbarBotton />
            </section>
            <Footer />
        </>
    );
};

export default Carousel;
