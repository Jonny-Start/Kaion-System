import React from "react";
import "./Task.css";
import { BasicLayout } from "../../components/BasicLayout";

function Task() {
  return (
    <BasicLayout idContent="Task">
      <div className="recentOrders">
        <div className="cardHeader">
          <a className="btn">
            Crear nuevo
          </a>
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
                <td><h3>Facturable</h3></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Star Refrigerator</td>
                <td>Paid</td>
                <td>
                  <span className="status billableTrue">Facturable</span>
                </td>
              </tr>
              <tr>
                <td>Window Coolers</td>
                <td>Due</td>
                <td>
                  <span className="status billableTrue">Facturable</span>
                </td>
              </tr>
              <tr>
                <td>Speakers</td>
                <td>Paid</td>
                <td>
                  <span className="status billableTrue">Facturable</span>
                </td>
              </tr>
              <tr>
                <td>Hp Laptop</td>
                <td>Due</td>
                <td>
                  <span className="status billableFalse">No facturable</span>
                </td>
              </tr>
              <tr>
                <td>Star Refrigerator</td>
                <td>Paid</td>
                <td>
                  <span className="status billableTrue">Facturable</span>
                </td>
              </tr>
              <tr>
                <td>Window Coolers</td>
                <td>Due</td>
                <td>
                  <span className="status billableFalse">No facturable</span>
                </td>
              </tr>
              <tr>
                <td>Speakers</td>
                <td>Paid</td>
                <td>
                  <span className="status billableTrue">Facturable</span>
                </td>
              </tr>
              <tr>
                <td>Hp Laptop</td>
                <td>Due</td>
                <td>
                  <span className="status billableTrue">Facturable</span>
                </td>
              </tr>
              <tr>
                <td>Apple Watch</td>
                <td>Paid</td>
                <td>
                  <span className="status billableFalse">No facturable</span>
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
