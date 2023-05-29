import React from "react";
import "./ConnectApi.css";
import { BasicLayout } from "../../components/BasicLayout";

function ConnectApi() {
  return (
    <BasicLayout idContent="ConnectApi">
      <h1>Kaion-System-API</h1>
      <p>
        Para conectarse a nuestra API REST, tienes que usar el siguiente toquen
        de seguridad, este toquen habilitara funciones y peticiones que realices
      </p>
      <h3>
        <span>Toquen: </span>
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDU5ZDgyMzMzNTlmN2EyZGQxYWY4MWEiLCJyb2xlIjoidXNlciIsImlhdCI6MTY4NTIxNjIxOSwiZXhwIjoxNjg1MjIzNDE5fQ.ojWDRPrLJw1I0vjpCHAhPGE5cP18rJdmjuv7lyh8Jv4"
      </h3>
      <h3>
        <span>URL BASE: </span>
        http://localhost:3000/v1/api/
      </h3>
      <section className="contentRequestApi">
        <h2>Solicitudes habilitadas</h2>
        <ul>
          <li>
            Una <p>Descripcion de como tiene que hacer la solicitud</p>
          </li>
          <li>
            Una <p>Descripcion de como tiene que hacer la solicitud</p>
          </li>
          <li>
            Una <p>Descripcion de como tiene que hacer la solicitud</p>
          </li>
          <li>
            Una <p>Descripcion de como tiene que hacer la solicitud</p>
          </li>
        </ul>
      </section>
    </BasicLayout>
  );
}

export { ConnectApi };
