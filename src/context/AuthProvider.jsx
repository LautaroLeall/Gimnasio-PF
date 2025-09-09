// src/context/AuthProvider.jsx
import { useEffect, useState, useMemo, useCallback } from "react";
import { AuthContext } from "./authContext";
import bcrypt from "bcryptjs";

const STORAGE_KEY = "gym_lg_users";
const SESSION_KEY = "gym_lg_current_user_id";

export default function AuthProvider({ children }) {
    // Estado para la lista de usuarios y el ID del usuario actual
    const [users, setUsers] = useState(() => {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            return raw ? JSON.parse(raw) : [];
        } catch {
            return [];
        }
    });

    const [currentUserId, setCurrentUserId] = useState(
        () => localStorage.getItem(SESSION_KEY) || null
    );

    // Efectos para persistir los datos en localStorage
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
    }, [users]);

    useEffect(() => {
        if (currentUserId) {
            localStorage.setItem(SESSION_KEY, currentUserId);
        } else {
            localStorage.removeItem(SESSION_KEY);
        }
    }, [currentUserId]);

    // --- Funciones de Autenticación ---

    const register = useCallback(async ({ name, email, password }) => {
        if (!name || !email || !password) {
            throw new Error("Nombre, email y contraseña son requeridos.");
        }

        const normalizedEmail = email.trim().toLowerCase();

        // Verificamos si el email ya existe
        if (users.some((user) => user.email === normalizedEmail)) {
            throw new Error("El email ya está registrado.");
        }

        // En una app real, el hashing se hace en el servidor.
        const passwordHash = await bcrypt.hash(password, 10);

        const newUser = {
            id: Date.now().toString(),
            name,
            email: normalizedEmail,
            passwordHash,
            // Puedes añadir más campos aquí
        };

        setUsers((prevUsers) => [...prevUsers, newUser]);
        setCurrentUserId(newUser.id); // Inicia sesión automáticamente tras el registro

        return newUser;
    }, [users]);

    const login = useCallback(async ({ email, password }) => {
        const normalizedEmail = email.trim().toLowerCase();
        const userFound = users.find((user) => user.email === normalizedEmail);

        if (!userFound) {
            throw new Error("Credenciales inválidas.");
        }

        const isPasswordCorrect = await bcrypt.compare(password, userFound.passwordHash);

        if (!isPasswordCorrect) {
            throw new Error("Credenciales inválidas.");
        }

        setCurrentUserId(userFound.id);
        return userFound;
    }, [users]);

    const logout = useCallback(() => {
        setCurrentUserId(null);
    }, []);

    // --- Datos derivados y valor del contexto ---

    // `useMemo` para obtener el objeto del usuario actual y evitar recálculos
    const user = useMemo(() =>
        users.find((u) => u.id === currentUserId) || null,
        [users, currentUserId]
    );

    const isAuthenticated = useMemo(() => !!user, [user]);

    // `useMemo` para el valor del contexto, previene re-renders innecesarios
    const contextValue = useMemo(() => ({
        user,
        isAuthenticated,
        register,
        login,
        logout,
    }), [user, isAuthenticated, register, login, logout]);

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
}