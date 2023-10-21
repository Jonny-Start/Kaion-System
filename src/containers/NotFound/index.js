import React from "react";
import "./NotFound.css";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  const handleBack = () => {
    return navigate("/login");
  };

  return (
    <div className="NotFound">
      <h1>404</h1>
      <div className="info">
        <h2>No podemos encontrar esa página.</h2>
        <p>
          El contenbido de esta página parece haber desaparecido. Nos
          disculpamos en su nombre.
        </p>
        <button onClick={() => handleBack()}>Volver</button>
      </div>
    </div>
  );
}
export { NotFound };
