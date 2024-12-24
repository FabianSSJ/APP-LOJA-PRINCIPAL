import React from "react";
import { Routes, Route } from "react-router-dom";
import CrearUsuario from "../pages/crearusuario";
import PaginaInicio from "../pages/PaginaInicio";
import Bienvenida from "../pages/Bienvenida"; // Nuevo componente para la página de bienvenida

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Bienvenida />} />
      <Route path="/inicio" element={<PaginaInicio />} />
      <Route path="/crear-usuario" element={<CrearUsuario />} />
    </Routes>
  );
};

export default AppRouter;
