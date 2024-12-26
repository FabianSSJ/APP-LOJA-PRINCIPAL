import React, { useState } from 'react';
import { FaUser, FaLock, FaEnvelope, FaVenusMars, FaMapMarkerAlt } from 'react-icons/fa';
import './CrearUsuario.css';

const CrearUsuario: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    gender: '',
    idNeighborhood: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch('http://localhost:5000/api/usuarios', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          last_name: formData.lastName,
          idneighborhood: formData.idNeighborhood
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setSuccess(`¡Bienvenido a LojaComunidad, ${data.usuario.name}! Tu cuenta ha sido creada exitosamente.`);
        setFormData({
          name: '',
          lastName: '',
          email: '',
          username: '',
          password: '',
          gender: '',
          idNeighborhood: '',
        });
      } else {
        setError('Error al crear usuario. Por favor, intenta de nuevo.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Error al conectar con el servidor. Por favor, verifica tu conexión e intenta de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="crear-usuario-container">
      <h2>Únete a LojaComunidad</h2>
      <p className="subtitle">Crea tu cuenta y conecta con tu comunidad</p>
      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">{success}</div>}
      <form onSubmit={handleSubmit} className="crear-usuario-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Tu nombre"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Apellido</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              placeholder="Tu apellido"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            <FaEnvelope /> Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="tu@email.com"
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">
            <FaUser /> Nombre de Usuario
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            placeholder="Elige un nombre de usuario único"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">
            <FaLock /> Contraseña
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="Crea una contraseña segura"
          />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="gender">
              <FaVenusMars /> Género
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Selecciona</option>
              <option value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
              <option value="otro">Otro</option>
              <option value="prefiero-no-decir">Prefiero no decir</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="idNeighborhood">
              <FaMapMarkerAlt /> Barrio
            </label>
            <input
              type="number"
              id="idNeighborhood"
              name="idNeighborhood"
              value={formData.idNeighborhood}
              onChange={handleChange}
              required
              placeholder="ID de tu barrio"
            />
          </div>
        </div>
        <button type="submit" className="btn-submit" disabled={isLoading}>
          {isLoading ? 'Creando cuenta...' : 'Crear Cuenta'}
        </button>
      </form>
      <p className="terms-text">
        Al crear una cuenta, aceptas nuestros <a href="/terminos">Términos de Servicio</a> y <a href="/privacidad">Política de Privacidad</a>.
      </p>
    </div>
  );
};

export default CrearUsuario;
