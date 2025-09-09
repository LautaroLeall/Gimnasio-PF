import React, { useState } from 'react';
import '../styles/Login.css'; // Importamos el archivo CSS

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes añadir la lógica de autenticación
    console.log('Correo:', email);
    console.log('Contraseña:', password);
    alert('Inicio de sesión simulado. Revisa la consola.');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Accede a tu Gimnasio</h2>
        <form onSubmit={handleSubmit} className="login-form">
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
          <button type="submit" className="login-button">
            Iniciar Sesión
          </button>
        </form>
        <p className="login-forgot-password">
          <a href="#">¿Olvidaste tu contraseña?</a>
        </p>
      </div>
      <div className="image-overlay"></div>
    </div>
  );
};

export default Login;