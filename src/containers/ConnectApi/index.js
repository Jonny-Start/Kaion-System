import React from "react";
import "./ConnectApi.css";
import { BasicLayout } from "../../components/BasicLayout";

function ConnectApi() {
  const tokenSecurity =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDU5ZDgyMzMzNTlmN2EyZGQxYWY4MWEiLCJyb2xlIjoidXNlciIsImlhdCI6MTY4NTIxNjIxOSwiZXhwIjoxNjg1MjIzNDE5fQ.ojWDRPrLJw1I0vjpCHAhPGE5cP18rJdmjuv7lyh8Jv4";

  const copyTextToken = () => {
    navigator.clipboard
      .writeText(tokenSecurity)
      .then(() => {
        console.log("Texto copiado al portapapeles:", tokenSecurity);
      })
      .catch((error) => {
        console.error("Error al copiar el texto:", error);
      });
  };

  return (
    <BasicLayout idContent="ConnectApi">
      <div className="contentConnectApi">
        <h2>Kaion-System-API</h2>
        <p>
          Para conectarse a nuestra API REST, tienes que usar el siguiente
          toquen de seguridad, este toquen habilitara funciones y peticiones que
          realices
        </p>
        <h3>
          <span>
            Toquen:{" "}
            <i
              className="fa-solid fa-clone"
              onClick={() => copyTextToken()}
            ></i>
          </span>
          <p>{tokenSecurity}</p>
        </h3>
        <h3>
          <span>
            URL BASE: <i className="fa-solid fa-clone"></i>
          </span>
          <p>http://localhost:3000/v1/api</p>
        </h3>
        <section className="contentRequestApi">
          <h2>Solicitudes habilitadas</h2>
          <ul>
            <li>
              {`<URL_BASE>`}/getUsers/{`<TOKEN> `}
              <p>Esta URL te trae todos los usuarios que tienes registrados</p>
            </li>
            <li>
              {`<URL_BASE>`}/getUsers/{`<TOKEN> `}
              <p>Esta URL te trae todos los usuarios que tienes registrados</p>
            </li>
            <li>
              {`<URL_BASE>`}/getUsers/{`<TOKEN> `}
              <p>Esta URL te trae todos los usuarios que tienes registrados</p>
            </li>
            <li>
              {`<URL_BASE>`}/getUsers/{`<TOKEN> `}
              <p>Esta URL te trae todos los usuarios que tienes registrados</p>
            </li>
            <li>
              {`<URL_BASE>`}/getUsers/{`<TOKEN> `}
              <p>Esta URL te trae todos los usuarios que tienes registrados</p>
            </li>
            <li>
              {`<URL_BASE>`}/getUsers/{`<TOKEN> `}
              <p>Esta URL te trae todos los usuarios que tienes registrados</p>
            </li>
            <li>
              {`<URL_BASE>`}/getUsers/{`<TOKEN> `}
              <p>Esta URL te trae todos los usuarios que tienes registrados</p>
            </li>
          </ul>
        </section>
      </div>
    </BasicLayout>
  );
}

export { ConnectApi };
