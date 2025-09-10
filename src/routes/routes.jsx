// src/routes/routes.jsx
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Register from '../components/Register';
import Login from '../components/Login';
import Carousel from '../components/Carousel';
import Sedes from '../components/Sedes';
import Coaches from '../components/Coaches';
import SobreNosotros from '../components/SobreNosotros';
import LandingPage from '../components/LandingPage';
import Planes from '../components/Planes';
import BannerHome from '../components/BannerHome';
import Footer from '../components/Footer';
import BannerPlanes from '../components/BannerPlanes';


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
        <Routes>
            {/* --- 1. Rutas Públicas --- */}
            {/* Estas rutas son accesibles para todos los usuarios. */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />

            {/* --- 2. Rutas Privadas --- */}
            {/* Aquí usamos PrivateRoute como una ruta "padre". */}
            {/* Todas las rutas anidadas dentro de ella estarán protegidas. */}
            <Route element={<PrivateRoute />}>
                <Route path="/home" element={renderCarousel("inicio")} />
                <Route path="/tabla" element={renderCarousel("tabla")} />
                <Route path="/formulario" element={renderCarousel("formulario")} />
                <Route path="/sedes" element={<Sedes />} />
                <Route path="/planes" element={<Planes />} />
                <Route path="/coaches" element={<Coaches />} />
                <Route path="/sobre-nosotros" element={<SobreNosotros />} />
            </Route>

        </Routes>
    );
};

export default AppRoutes;