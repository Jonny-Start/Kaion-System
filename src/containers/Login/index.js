import React from "react";
import "./Login.css";
import imgIcono from "./../../icono.png";
import { Button, Input } from "../../components/forms";
import { Navigate, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { useAppContext } from "../../context/appContext";

function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const emailInput = React.useRef(null);
  const passwordInput = React.useRef(null);

  const auth = useAuth();

  const context = useAppContext();

  const ERROR = context.error;
  const LOADING = context.loading;

  const navigate = useNavigate();

  const handleBack = () => {
    return navigate("/");
  };

  const login = (e) => {
    e.preventDefault();
    auth.ProcessLogin({ email, password });
  };

  const handleUser = () => {
    // setemail(event.target.value);
    setEmail(emailInput.current.value);
  };

  const onChangeTypeInput = () => {
    if (passwordInput.current.type === "text") {
      passwordInput.current.type = "password";
    } else {
      passwordInput.current.type = "text";
    }
  };

  const handlePassword = () => {
    setPassword(passwordInput.current.value);
  };

  if (auth.user) {
    return <Navigate to="/Home" />;
  }

  return (
    <section id="login">
      <img
        src={imgIcono}
        alt="icono Kaion-System"
        id="iconoKaionSystem"
        onClick={() => handleBack()}
      />

      <section id="contentFormLogin">
        <h1>Ingresa a tu cuenta</h1>
        {ERROR && <p style={{color: 'red', marginBottom: '2em'}}> {ERROR}</p>}
        <form onSubmit={login}>
          <Input
            type="email"
            textLabel="Correo electrónico"
            icon="email"
            classInput="inputText"
            required={true}
            refVal={emailInput}
            onChangeinput={() => handleUser()}
            value={email}
            errorInput={ERROR}
          />
          <Input
            type="password"
            textLabel="Contraseña"
            icon="password"
            id="passLogin"
            classInput="inputPassword"
            required={true}
            refVal={passwordInput}
            onChangeinput={() => handlePassword()}
            value={password}
            onChangeType={() => onChangeTypeInput()}
            errorInput={ERROR}
          />
          <Button
            typeStyleButton="primary"
            textButton="Iniciar sesión"
            typeButton="submit"
            disabledButton={LOADING}
          />
        </form>
        <p className="contentLink">
          ¿Olvidaste tu{" "}
          <Link className="colorLink" to={`/ResetPassword`}>
            contraseña
          </Link>{" "}
          ?
        </p>
        <p className="contentLink">
          ¿Todavía no tienes una cuenta?{" "}
          <Link className="colorLink" to={`/CreateAccount`}>
            Regístrate
          </Link>
        </p>
      </section>
      <div className="imgBackground">
        <div className="colorGradient">
          <h2>
            Bienvenido a <br />
            <span>Kaion-System</span>
          </h2>
          <p>¡Empieza a registrar tus horas productivas!</p>
        </div>
      </div>
    </section>
  );
}

export { Login };
