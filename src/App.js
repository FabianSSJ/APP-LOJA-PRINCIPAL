import React from 'react';
import './App.css';
import AppRouter from './routes/router';
import BarraDeNavegacion from './pages/BarraDeNavegacion';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  // Ocultar la barra de navegación en la página de bienvenida
  const hideNavbarRoutes = ['/']; // Agrega más rutas si necesitas ocultarla en otras páginas

  return (
    <div>
      {!hideNavbarRoutes.includes(location.pathname) && <BarraDeNavegacion />}
      <AppRouter />
    </div>
  );
}

export default App;
