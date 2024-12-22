import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from '../App'; 
import PaginaInicio from '../Content/pages/paginainicio';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} /> 
        <Route path="/inicio" element={<PaginaInicio />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
