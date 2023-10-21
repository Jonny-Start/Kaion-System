import React from "react";
import "./ResetPassword.css";
import imgIcono from "./../../icono.png";
import { Button, Input } from "../../components/forms";
import { useNavigate } from "react-router-dom";
import imgBackground2 from "./../../background2.jpg";

function ResetPassword() {
  const [email, setEmail] = React.useState("");
  const emailInput = React.useRef(null);
  const navigate = useNavigate();

  const resetPass = (e) => {
    e.preventDefault();
    // auth.ProcessLogin({ email, password });
  };

  const handleUser = () => {
    setEmail(emailInput.current.value);
  };

  const handleCancel = () => {
    return navigate("/login");
  };

  return (
    <section id="ResetPassword">
      <div id="ResetPasswordBackground">
        <div id="ResetPasswordGradient">
          <div id="iconoKaionSystem">
            <img src={imgIcono} alt="icono Kaion-System" />
            Kaion-System
            <p>¡Empieza a registrar tus horas productivas!</p>
          </div>
        </div>
      </div>

      <div className="cardReset">
        <h1>Recuperar contraseña</h1>
        <p>
          Para restablecer tu contraseña, ingresa tu correo electrónico a continuación y envíalo. Se enviará un correo electrónico con instrucciones sobre cómo completar el proceso.
        </p>
        <form onSubmit={resetPass}>
          <Input
            type="email"
            textLabel="Correo electrónico"
            icon="email"
            classInput="inputText"
            required={true}
            refVal={emailInput}
            onChangeinput={() => handleUser()}
            value={email}
          />
          <Button
            typeStyleButton="secondary1"
            textButton="Enviar"
            typeButton="submit"
          />
          <Button
            typeStyleButton="secondary2"
            textButton="Cancelar"
            typeButton="button"
            onAction={() => handleCancel()}
          />
        </form>
      </div>

    </section>
  );
}

export { ResetPassword };
