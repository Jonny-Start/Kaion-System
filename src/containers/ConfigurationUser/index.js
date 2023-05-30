import React from "react";
import "./ConfigurationUser.css";
import { BasicLayout } from "../../components/BasicLayout";

function ConfigurationUser() {
  return (
    <BasicLayout idContent="ConfigurationUser" backgroundImage={true}>
      <div className="recentOrders">
        <table>
          <thead>
            <tr>
              <td>
                Nombre <input type="search" placeholder="Buscar" />
              </td>
              <td>
                Email <input type="search" placeholder="Buscar" />
              </td>
              <td>
                Numero telefonico <input type="search" placeholder="Buscar" />
              </td>
              <td>Activo</td>
              <td>Eliminar</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Jonny Cano</td>
              <td>jonny.cano@gmail.com</td>
              <td>+57 3015018468</td>
              <td>
                <i className="fa-solid fa-check" style={{ color: "green" }} title="Cambiar estado"></i>
              </td>
              <td>
                <i className="fa-solid fa-trash" style={{ color: "red" }} title="Eliminar"></i>
              </td>
            </tr>
            <tr>
              <td>Jonny Cano</td>
              <td>jonny.cano@gmail.com</td>
              <td>+57 3015018468</td>
              <td>
                <i className="fa-solid fa-check" style={{ color: "green" }} title="Cambiar estado"></i>
              </td>
              <td>
                <i className="fa-solid fa-trash" style={{ color: "red" }} title="Eliminar"></i>
              </td>
            </tr>
            <tr>
              <td>Jonny Cano</td>
              <td>jonny.cano@gmail.com</td>
              <td>+57 3015018468</td>
              <td>
                <i className="fa-solid fa-check" style={{ color: "green" }} title="Cambiar estado"></i>
              </td>
              <td>
                <i className="fa-solid fa-trash" style={{ color: "red" }} title="Eliminar"></i>
              </td>
            </tr>
            <tr>
              <td>Jonny Cano</td>
              <td>jonny.cano@gmail.com</td>
              <td>+57 3015018468</td>
              <td>
                <i className="fa-solid fa-check" style={{ color: "green" }} title="Cambiar estado"></i>
              </td>
              <td>
                <i className="fa-solid fa-trash" style={{ color: "red" }} title="Eliminar"></i>
              </td>
            </tr>
            <tr>
              <td>Jonny Cano</td>
              <td>jonny.cano@gmail.com</td>
              <td>+57 3015018468</td>
              <td>
                <i className="fa-solid fa-check" style={{ color: "green" }} title="Cambiar estado"></i>
              </td>
              <td>
                <i className="fa-solid fa-trash" style={{ color: "red" }} title="Eliminar"></i>
              </td>
            </tr>
            <tr>
              <td>Jonny Cano</td>
              <td>jonny.cano@gmail.com</td>
              <td>+57 3015018468</td>
              <td>
                <i className="fa-solid fa-check" style={{ color: "green" }} title="Cambiar estado"></i>
              </td>
              <td>
                <i className="fa-solid fa-trash" style={{ color: "red" }} title="Eliminar"></i>
              </td>
            </tr>
            <tr>
              <td>Jonny Cano</td>
              <td>jonny.cano@gmail.com</td>
              <td>+57 3015018468</td>
              <td>
                <i className="fa-solid fa-check" style={{ color: "green" }} title="Cambiar estado"></i>
              </td>
              <td>
                <i className="fa-solid fa-trash" style={{ color: "red" }} title="Eliminar"></i>
              </td>
            </tr>
            <tr>
              <td>Jonny Cano</td>
              <td>jonny.cano@gmail.com</td>
              <td>+57 3015018468</td>
              <td>
                <i className="fa-solid fa-check" style={{ color: "green" }} title="Cambiar estado"></i>
              </td>
              <td>
                <i className="fa-solid fa-trash" style={{ color: "red" }} title="Eliminar"></i>
              </td>
            </tr>
            <tr>
              <td>Jonny Cano</td>
              <td>jonny.cano@gmail.com</td>
              <td>+57 3015018468</td>
              <td>
                <i className="fa-solid fa-check" style={{ color: "green" }} title="Cambiar estado"></i>
              </td>
              <td>
                <i className="fa-solid fa-trash" style={{ color: "red" }} title="Eliminar"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </BasicLayout>
  );
}

export { ConfigurationUser };
