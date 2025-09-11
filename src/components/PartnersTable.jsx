// src/components/PartnersTable.jsx
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import '../styles/PartnersTable.css';

const PartnersTable = ({ socios, eliminarSocio, editarSocio, scrollToForm }) => {

    const confirmarEliminacion = (id) => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: '¡Este turno se eliminará permanentemente!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#6c757d',
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                eliminarSocio(id);
                Swal.fire('Eliminado', 'El turno fue eliminado exitosamente.', 'success');
            }
        });
    };

    // Función para editar y hacer scroll al formulario
    const handleEditar = (id) => {
        editarSocio(id);
        scrollToForm();  // Scroll suave al formulario
    };

    return (
        <div className="d-flex flex-column align-items-center">
            <table className="table table-dark p-4 rounded w-75 my-5 align-middle text-center">
                <thead>
                    <tr>
                        <th className="content-table">Nombre y Apellido</th>
                        <th className="content-table">Teléfono</th>
                        <th className="content-table">Email</th>
                        <th className="content-table">Clase</th>
                        <th className="content-table">Horario</th>
                        <th className="content-table">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {socios.length === 0 ? (
                        <tr>
                            <td className="content-table" colSpan="7">No hay turnos cargados.</td>
                        </tr>
                    ) : (
                        socios.map((socio) => (
                            <tr key={socio.id}>
                                <td className="content-table">{socio.nombreApellido}</td>
                                <td className="content-table">{socio.telefono}</td>
                                <td className="content-table">{socio.email}</td>
                                <td className="content-table">{socio.clase}</td>
                                <td className="content-table">{socio.horario}</td>
                                <td className="content-table">
                                    {/* Usamos la función handleEditar para editar y hacer scroll */}
                                    <button className="btn btn-warning btn-sm me-2" onClick={() => handleEditar(socio.id)}>
                                        Editar
                                    </button>
                                    <button className="btn btn-danger btn-sm" onClick={() => confirmarEliminacion(socio.id)}>
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default PartnersTable;
