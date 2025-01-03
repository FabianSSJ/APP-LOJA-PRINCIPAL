import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // Asegúrate de tener los estilos correctos

const Bienvenida = () => {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate('/inicio'); 
  };

  return (
    <div className="container">
      <div className="image-section">
        <img
          src="/images/fondo.jpg"
          alt="Puerta de la Ciudad"
          className="background-image"
        />
      </div>
      <div className="text-section">
        <h1>¡Bienvenido/a!</h1>
        <p>
          En nuestra plataforma te vamos a brindar la oportunidad de hacer la diferencia en tu comunidad.
          Si eres residente de la ciudad de Loja, aquí podrás denunciar problemas y compartir información sobre tu barrio.
        </p>
        <p>
          ¿Hay un bache en la calle de tu barrio y necesita ser arreglado de forma urgente? 
          ¿Un poste de luz dejó de funcionar? ¿Algún problema en cuanto a seguridad?
        </p>
        <p>
          Este es el lugar para que puedas hacerlo conocer.
        </p>
        <p>
          Únete a nosotros para mejorar nuestra comunidad. Denuncia y construye el buen vivir en tu barrio.
        </p>
        <button className="next-button" onClick={handleNextClick}>
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Bienvenida;
