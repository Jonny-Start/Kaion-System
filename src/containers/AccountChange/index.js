import React from "react";
import "./AccountChange.css";
import URLIMG from "../../icono.png";
import { BasicLayout } from "../../components/BasicLayout";

function AccountChange() {
  return (
    <BasicLayout idContent="AccountChange" backgroundImage={true}>
      <div className="contentSearch">
        <input type="search" placeholder="Buscar" />
      </div>
      <div className="containerCards">
        <div className="card">
          <div className="imgBx">
            Jonny Alejandro Cano Acosta
            <img src={URLIMG} alt="" />
          </div>
          <div className="content">
            <div>
              <h3>Jonny Alejandro Cano Acosta</h3>
              <p>
                <span>Numero de telefono: </span> +57 3015018468
              </p>
              <p>
                <span>Correo Electronico: </span>{" "}
                jonnyalejandro.ca0910@gmail.com
              </p>
              <p>
                <span>Role: </span> Admin
              </p>
              <p>
                <span>Active: </span> SI
              </p>
              <a >
                <i className="fa-solid fa-arrows-down-to-people"></i> Cambiar
              </a>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="imgBx">
            Karen Juliana Gomez Mattos
            <img src={URLIMG} alt="" />
          </div>
          <div className="content">
            <div>
              <h3>Karen Juliana Gomez Mattos</h3>
              <p>
                <span>Numero de telefono: </span> +57 3015018468
              </p>
              <p>
                <span>Correo Electronico: </span>{" "}
                jonnyalejandro.ca0910@gmail.com
              </p>
              <p>
                <span>Role: </span> User
              </p>
              <p>
                <span>Active: </span> SI
              </p>
              <a >
                <i className="fa-solid fa-arrows-down-to-people"></i> Cambiar
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="imgBx">
            Carlos Andres Torres Sanches
            <img src={URLIMG} alt="" />
          </div>
          <div className="content">
            <div>
              <h3>Carlos Andres Torres Sanches</h3>
              <p>
                <span>Numero de telefono: </span> +57 3015018468
              </p>
              <p>
                <span>Correo Electronico: </span>{" "}
                jonnyalejandro.ca0910@gmail.com
              </p>
              <p>
                <span>Role: </span> Admin
              </p>
              <p>
                <span>Active: </span> SI
              </p>
              <a >
                <i className="fa-solid fa-arrows-down-to-people"></i> Cambiar
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="imgBx">
            Irene Acosta Villarreal
            <img src={URLIMG} alt="" />
          </div>
          <div className="content">
            <div>
              <h3>Irene Acosta Villarreal</h3>
              <p>
                <span>Numero de telefono: </span> +57 3015018468
              </p>
              <p>
                <span>Correo Electronico: </span>{" "}
                jonnyalejandro.ca0910@gmail.com
              </p>
              <p>
                <span>Role: </span> User
              </p>
              <p>
                <span>Active: </span> SI
              </p>
              <a >
                <i className="fa-solid fa-arrows-down-to-people"></i> Cambiar
              </a>
            </div>
          </div>
        </div>
      </div>
    </BasicLayout>
  );
}

export { AccountChange };
