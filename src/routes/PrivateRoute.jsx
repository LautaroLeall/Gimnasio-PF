// src/routes/PrivateRoute.jsx
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const PrivateRoute = () => {
    const { isAuthenticated } = useAuth();

    // Si el usuario está autenticado, renderiza el componente <Outlet />.
    // <Outlet /> actuará como un marcador de posición para las rutas hijas protegidas.
    // Si no, lo redirige a la página de login.
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;