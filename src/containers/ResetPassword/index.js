import React from "react";
import "./ResetPassword.css";
import imgIcono from "./../../icono.png";
import { Button, Input } from "../../components/forms";
import { useNavigate } from "react-router-dom";

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
      <div id="iconoKaionSystem">
        <img src={imgIcono} alt="icono Kaion-System" />
        Kaion-System
      </div>

      <h1>Recuperar contraseña</h1>
      <div className="borderDegrade">
        <div className="contentResetPass">
          <h2>
            Ingrese la dirección de correo electrónico y le enviaremos un enlace
            para restablecer su contraseña.
          </h2>
          <form onSubmit={resetPass}>
            <Input
              type="email"
              textLabel="Correo electronico"
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
              textButton="Cancel"
              typeButton="button"
              onAction={() => handleCancel()}
            />
          </form>
        </div>
      </div>
    </section>
  );
}

export { ResetPassword };
