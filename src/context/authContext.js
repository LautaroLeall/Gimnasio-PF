// src/context/authContext.js
// - Solo crea y exporta el contexto (sin componentes).
// - Separarlo evita advertencias de Fast Refresh al mezclar componentes y otras exportaciones.

import { createContext } from "react";

export const AuthContext = createContext(null);