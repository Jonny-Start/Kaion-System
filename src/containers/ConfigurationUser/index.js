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
              <td>Jonny Alejandro Cano Acosta</td>
              <td>jonnyalejandro.ca0910@gmail.com</td>
              <td>+57 3015018468</td>
              <td>
                <i className="fa-solid fa-xmark" style={{ color: "red" }} title="Cambiar estado"></i>
              </td>
              <td>
                <i className="fa-solid fa-trash" style={{ color: "red" }} title="Eliminar"></i>
              </td>
            </tr>
            <tr>
              <td>Karen Juliana Gomez Mattos</td>
              <td>karengomezmattos@gmail.com</td>
              <td>+57 3138811353</td>
              <td>
                <i className="fa-solid fa-check" style={{ color: "green" }} title="Cambiar estado"></i>
              </td>
              <td>
                <i className="fa-solid fa-trash" style={{ color: "red" }} title="Eliminar"></i>
              </td>
            </tr>
            <tr>
              <td>Irene Acosta Villarreal</td>
              <td>ireneacosta84@hotmail.com</td>
              <td>+57 3107550085</td>
              <td>
                <i className="fa-solid fa-check" style={{ color: "green" }} title="Cambiar estado"></i>
              </td>
              <td>
                <i className="fa-solid fa-trash" style={{ color: "red" }} title="Eliminar"></i>
              </td>
            </tr>
            <tr>
              <td>Carlos Miguel torres sanchez</td>
              <td>miguel.sanchez@gmail.com</td>
              <td>+57 3115318390</td>
              <td>
                <i className="fa-solid fa-check" style={{ color: "green" }} title="Cambiar estado"></i>
              </td>
              <td>
                <i className="fa-solid fa-trash" style={{ color: "red" }} title="Eliminar"></i>
              </td>
            </tr>
            <tr>
              <td>Carlos Andres Torres Sanches</td>
              <td>carlosandres@outlook.com</td>
              <td>+57 3112943043</td>
              <td>
                <i className="fa-solid fa-xmark" style={{ color: "red" }} title="Cambiar estado"></i>
              </td>
              <td>
                <i className="fa-solid fa-trash" style={{ color: "red" }} title="Eliminar"></i>
              </td>
            </tr>
            <tr>
              <td>Daniel sanchez</td>
              <td>dSanchezks@gmail.com</td>
              <td>+57 3129493823</td>
              <td>
                <i className="fa-solid fa-check" style={{ color: "green" }} title="Cambiar estado"></i>
              </td>
              <td>
                <i className="fa-solid fa-trash" style={{ color: "red" }} title="Eliminar"></i>
              </td>
            </tr>
            <tr>
              <td>Camilo Castillo roso</td>
              <td>catillo.roso@mintic.com</td>
              <td>+57 3149238932</td>
              <td>
                <i className="fa-solid fa-check" style={{ color: "green" }} title="Cambiar estado"></i>
              </td>
              <td>
                <i className="fa-solid fa-trash" style={{ color: "red" }} title="Eliminar"></i>
              </td>
            </tr>
            <tr>
              <td>Jonny Cano</td>
              <td>jonny.cano@valorganado.com</td>
              <td>+57 3015018468</td>
              <td>
                <i className="fa-solid fa-check" style={{ color: "green" }} title="Cambiar estado"></i>
              </td>
              <td>
                <i className="fa-solid fa-trash" style={{ color: "red" }} title="Eliminar"></i>
              </td>
            </tr>
            <tr>
              <td>Rodrigo Buzeta</td>
              <td>rodrigo.buzeta@valorganado.com</td>
              <td>+57 3103948726</td>
              <td>
                <i className="fa-solid fa-xmark" style={{ color: "red" }} title="Cambiar estado"></i>
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
