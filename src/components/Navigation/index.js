import React from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";
import URLIMG from "../../icono.png";

function Navigation({ active }) {
  return (
    <nav className={`navigation ${active ? "active" : ""}`}>
      <ul>
        <li>
          <NavLink to={"/"}>
            <div className="contentOptionNav">
              <span className="icon">
                <img src={URLIMG} alt="Img profile" />
              </span>
              <span className="title">
                <h2>Kaion System</h2>
              </span>
            </div>
          </NavLink>
        </li>
        {routes.map((route) => {
          // if (route.publicOnly && auth.user) return null;
          // if (route.private && !auth.user) return null;
          return (
            <li key={route.to}>
              <NavLink
                // style={({ isActive }) => ({
                //   backgroundColor: isActive ? "red" : "blue",
                // })}
                to={route.to}
              >
                <div className="contentOptionNav">
                  <span className="icon">
                    <i className={route.classIcon}></i>
                  </span>
                  <span className="title">
                    <h2>{route.text}</h2>
                  </span>
                </div>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

const routes = [];
routes.push({
  to: "/home",
  text: "Horas",
  classIcon: "fa-regular fa-clock",
  private: false,
});
routes.push({
  to: "/proyect",
  text: "Proyectos",
  classIcon: "fa-solid fa-diagram-project",
  private: false,
});
routes.push({
  to: "/task",
  text: "Tareas",
  classIcon: "fa-solid fa-list-check",
  private: false,
});
routes.push({
  to: "/dashBoard",
  text: "Estadísticas",
  classIcon: "fa-solid fa-chart-bar",
  private: false,
});
routes.push({
  to: "/profile",
  text: "Perfil",
  classIcon: "fa-regular fa-user",
  private: false,
});
routes.push({
  to: "/accountChange",
  text: "Cambiar de cuenta",
  classIcon: "fa-solid fa-users",
  private: false,
});
routes.push({
  to: "/taskAssignment",
  text: "Asiganción",
  classIcon: "fa-regular fa-address-book",
  private: false,
});
routes.push({
  to: "/configurationUser",
  text: "Empleados",
  classIcon: "fa-solid fa-users-gear",
  private: false,
});
routes.push({
  to: "/connectApi",
  text: "Conectar a API",
  classIcon: "fa-solid fa-link",
  private: false,
});
routes.push({
  to: "/help",
  text: "Ayuda",
  classIcon: "fa-solid fa-question",
  private: false,
});
export { Navigation };
