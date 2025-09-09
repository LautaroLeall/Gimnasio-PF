import React, { useState } from 'react';
import '../styles/Register.css'; // Importamos el archivo CSS para el registro

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes añadir la lógica de registro
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden.');
      return;
    }
    console.log('Nombre:', name);
    console.log('Correo:', email);
    console.log('Contraseña:', password);
    alert('Registro simulado. Revisa la consola.');
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2 className="register-title">Crea tu Cuenta</h2>
        <form onSubmit={handleSubmit} className="register-form">
          <div className="form-group">
            <label htmlFor="name">Nombre Completo</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirmar Contraseña</label>
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="register-button">
            Registrarse
          </button>
        </form>
        <p className="register-login-link">
          ¿Ya tienes cuenta? <a href="#">Inicia Sesión</a>
        </p>
      </div>
      <div className="image-overlay-register"></div> {/* Overlay similar para consistencia */}
    </div>
  );
};

export default Register;