// src/routes/routes.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Sedes from '../components/Sedes';
import Coaches from '../components/Coaches';
import Carousel from '../components/Carousel';
import SobreNosotros from '../components/SobreNosotros';
import Login from '../components/Login';
import Register from '../components/Register';

const AppRoutes = (props) => {
    const {
        socios,
        agregarSocio,
        eliminarSocio,
        editarSocio,
        actualizarSocio,
        cancelarEdicion,
        modoEdicion,
        socioEditado,
    } = props;

    // Para no repetir tanto el mismo bloque
    const renderCarousel = (vista) => (
        <Carousel
            vista={vista}
            socios={socios}
            agregarSocio={agregarSocio}
            eliminarSocio={eliminarSocio}
            editarSocio={editarSocio}
            actualizarSocio={actualizarSocio}
            cancelarEdicion={cancelarEdicion}
            modoEdicion={modoEdicion}
            socioEditado={socioEditado}
        />
    );

    return (
        <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={renderCarousel("inicio")} />
                    <Route path="/sedes" element={<Sedes />} />
                    <Route path="/coaches" element={<Coaches />} />
                    <Route path="/formulario" element={renderCarousel("formulario")} />
                    <Route path="/tabla" element={renderCarousel("tabla")} />
                    <Route path="/sobre-nosotros" element={<SobreNosotros />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/banner" element={<Banner />} />
                </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
