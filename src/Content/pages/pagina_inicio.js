import React from 'react';
import BarraDeNavegacion from './BarraDeNavegacion'; // Importar el componente
import './PaginaInicio.css';

function PaginaInicio() {
  return (
    <div>
      <BarraDeNavegacion /> {/* Barra de navegación arriba */}
      <div className="pagina-inicio">
        <h1>Bienvenidos a la Aplicación</h1>
        <p>Explora todas las opciones disponibles.</p>
      </div>
    </div>
  );
}

export default PaginaInicio;
