import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from '../App'; 
import pagina_inicio from '../Content/pages/pagina_inicio';


function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} /> {/* Página principal */}
        <Route path="../Content/pages/pagina_inicio" element={<pagina_inicio />} /> {pagina_inicio}
      </Routes>
    </Router>
  );
}

export default AppRoutes;
