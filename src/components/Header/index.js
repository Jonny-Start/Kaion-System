import React from "react";
import "./Header.css";
import URLIMG from "../../power.svg";
import { useAuth } from "../../context/auth";
//import { useAppContext } from "../../context/appContext";



function Header({ active, onActive }) {
  const auth = useAuth();
  //const context = useAppContext();

  return (
    <div className="topbar">
      <div
        className={`toggle ${active ? "active" : ""}`}
        onClick={() => onActive()}
      ></div>
      <div>
        <h1>{auth.user.apodo}</h1>
      </div>
      <div className="user" onClick={auth.logout}>
        <img src={URLIMG} alt="Img profile" />
      </div>
    </div>
  );
}

export { Header };
