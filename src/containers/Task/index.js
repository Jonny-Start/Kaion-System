import React from "react";
import "./Task.css";
import { BasicLayout } from "../../components/BasicLayout";

function Task() {
  return (
    <BasicLayout idContent="Task" backgroundImage={true}>
      <div className="recentOrders">
        <div className="cardHeader">
          <a className="btn">Crear nuevo</a>
        </div>
        <div className="cardTable">
          <table>
            <thead>
              <tr>
                <td>
                  <h3>Nombre de tarea</h3>
                  <input type="search" placeholder="Buscar" />
                </td>
                <td>
                  <h3> Proyecto asignado</h3>
                </td>
                <td>
                  <h3>Facturable</h3>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Esfuerzo discrecional</td>
                <td>VyVy</td>
                <td>
                  <span className="status billableTrue">Facturable</span>
                </td>
              </tr>
              <tr>
                <td>Esfuerzo evolutivo</td>
                <td>Juntos App</td>
                <td>
                  <span className="status billableTrue">Facturable</span>
                </td>
              </tr>
              <tr>
                <td>Bolsa de horas 8H</td>
                <td>Juntos App</td>
                <td>
                  <span className="status billableTrue">Facturable</span>
                </td>
              </tr>
              <tr>
                <td>Auto-estudio</td>
                <td>MS-Lifer</td>
                <td>
                  <span className="status billableFalse">No facturable</span>
                </td>
              </tr>
              <tr>
                <td>Programming</td>
                <td>MS-Lifer</td>
                <td>
                  <span className="status billableTrue">Facturable</span>
                </td>
              </tr>
              <tr>
                <td>Soporte y mantenimineto</td>
                <td>MS-Lifer</td>
                <td>
                  <span className="status billableTrue">Facturable</span>
                </td>
              </tr>
              <tr>
                <td>Inducción</td>
                <td>MS-Lifer</td>
                <td>
                  <span className="status billableFalse">No facturable</span>
                </td>
              </tr>
              <tr>
                <td>Servicio base</td>
                <td>SAAS</td>
                <td>
                  <span className="status billableTrue">Facturable</span>
                </td>
              </tr>
              <tr>
                <td>Programming</td>
                <td>Forecast</td>
                <td>
                  <span className="status billableTrue">Facturable</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </BasicLayout>
  );
}

export { Task };
