import React from "react";
import "./Proyect.css";
import { BasicLayout } from "../../components/BasicLayout";

function Proyect() {
  return (
    <BasicLayout idContent="Proyect" backgroundImage="true">
      <div className="recentOrders">
        <div className="cardHeader">
          <a  className="btn">
            Crear nuevo
          </a>
        </div>
        <div className="cardTable">
          <table>
            <thead>
              <tr>
                <td>
                  <h3>Nombre de proyecto</h3>{" "}
                  <input type="search" placeholder="Buscar" />
                </td>
                <td>
                  <h3>Empresa</h3> <input type="search" placeholder="Buscar" />
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>VyVy</td>
                <td>4S</td>
              </tr>
              <tr>
                <td>Juntos App</td>
                <td>Merck</td>
              </tr>
              <tr>
                <td>MS-Lifer</td>
                <td>Merck</td>
              </tr>
              <tr>
                <td>SAAS</td>
                <td>Valor Ganado</td>
              </tr>
              <tr>
                <td>Forecast</td>
                <td>Valor Ganado</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </BasicLayout>
  );
}

export { Proyect };
