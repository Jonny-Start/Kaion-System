import React from "react";
import "./Login.css";
import imgIcono from "./../../icono.png";
import { Button, Input } from "../../components/forms";

function Login(params) {
  return (
    <div id="login">
      <img src={imgIcono} alt="icono Kaion-System" id="iconoKaionSystem" />

      <section id="contentFormLogin">
        <h1>Ingresa a tu cuenta</h1>
        <form action="#">
          <Input
            type="text"
            textLabel="Email"
            icon="email"
            classInput="inputText"
          />
          <Input
            type="password"
            textLabel="Password"
            icon="password"
            id="passLogin"
            classInput="inputPassword"
            required={true}
          />
          <Button
            typeStyleButton="primary"
            textButton="Iniciar sesión"
            typeButton="submit"
          />
        </form>
      </section>
      <div className="imgBackground">
        <div className="colorGradient">
          <h2>
            Bienvenido a <br />
            <span>Kaion-System</span>
          </h2>
          <p>¡Empieza a registar tus horas productivas!</p>
        </div>
      </div>
    </div>
  );
}

export { Login };
