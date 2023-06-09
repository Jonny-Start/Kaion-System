import React from "react";
import "./CreateAccount.css";
import imgIcono from "./../../icono.png";
// import imgBackground from "./../../background.jpg";
// import imgBackground2 from "./../../background2.jpg";
import { Button, Input } from "../../components/forms";
import { Link } from "react-router-dom";
import { useAppContext } from "../../context/appContext";

function CreateAccount() {
  const [fullName, setFullName] = React.useState("");
  const [nickname, setNickname] = React.useState("");
  const [prefixNumber, setPrefixNumber] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [delegateCompany, setDelegateCompany] = React.useState("");
  const [nameCompany, setNameCompany] = React.useState("");

  const fullNameInput = React.useRef(null);
  const nicknameInput = React.useRef(null);
  const prefixNumberInput = React.useRef(null);
  const phoneNumberInput = React.useRef(null);
  const emailInput = React.useRef(null);
  const passwordInput = React.useRef(null);
  const confirmPasswordInput = React.useRef(null);
  const delegateCompanySelect = React.useRef(null);
  const nameCompanyInput = React.useRef(null);

  const context = useAppContext();

  const useHandleCreateAccount = (e) => {
    e.preventDefault();
    const allData = {
      fullName: fullName,
      nickname: nickname,
      prefixNumber: prefixNumber,
      phoneNumber: phoneNumber,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      delegateCompany: delegateCompany,
      nameCompany: nameCompany,
    };
    context.useCreateAccount(allData);
  };

  const handleData = (updateState, refInput) => {
    updateState(refInput.current.value);
  };

  const onChangeTypeInput = (refInput) => {
    if (refInput.current.type === "text") {
      refInput.current.type = "password";
    } else {
      refInput.current.type = "text";
    }
  };

  /*
   ** role
   ** active
   ** usersAvailable
   */

  return (
    <section id="CreateAccount">
      <div id="CreateAccountBackground">
        <div id="CreateAccountGradient">
          <div id="iconoKaionSystem">
            <img src={imgIcono} alt="icono Kaion-System" />
            <p>Kaion-System </p>
          </div>
          <div className="contentDescription">
            <h2>¿Por qué Kaion-System?</h2>
            <article>
              <h3>
                <i className="fa-solid fa-check"></i>
                Monitoreo integral del tiempo productivo
              </h3>
              <p>
                Obtén una visión completa del tiempo dedicado a diferentes
                actividades, proyectos y tareas, en diferentes entornos de
                trabajo.
              </p>
            </article>
            <article>
              <h3>
                <i className="fa-solid fa-check"></i>
                Visualización intuitiva
              </h3>
              <p>
                Utiliza gráficos claros y concisos para representar visualmente
                la distribución del tiempo productivo, permitiendo una fácil
                comprensión y toma de decisiones informadas.
              </p>
            </article>
          </div>
        </div>
      </div>
      <div className="cardForm">
        <h1>Crea tu cuenta</h1>
        <p>
          Empieza a registrar tus horas de trabajo y sacale el mayor provecho a
          cada minuto
        </p>
        <form onSubmit={useHandleCreateAccount}>
          <Input
            type="text"
            textLabel="Nombre completo"
            icon="input"
            classInput="inputText"
            required={true}
            refVal={fullNameInput}
            onChangeinput={() => handleData(setFullName, fullNameInput)}
            value={fullName}
          />

          <Input
            type="text"
            textLabel="Apodo"
            icon="input"
            classInput="inputText"
            required={true}
            refVal={nicknameInput}
            onChangeinput={() => handleData(setNickname, nicknameInput)}
            value={nickname}
          />

          <div className="contentNumber">
            <Input
              type="text"
              textLabel="+57"
              icon=""
              classInput="inputText"
              required={false}
              refVal={prefixNumberInput}
              onChangeinput={() =>
                handleData(setPrefixNumber, prefixNumberInput)
              }
              value={prefixNumber}
            />
            <Input
              type="number"
              textLabel="Número de celular"
              icon="phone"
              classInput="inputText"
              required={false}
              refVal={phoneNumberInput}
              onChangeinput={() => handleData(setPhoneNumber, phoneNumberInput)}
              value={phoneNumber}
            />
          </div>

          <Input
            type="email"
            textLabel="Correo electrónico"
            icon="email"
            classInput="inputText"
            required={true}
            refVal={emailInput}
            onChangeinput={() => handleData(setEmail, emailInput)}
            value={email}
          />

          <Input
            type="password"
            textLabel="Contraseña"
            icon="password"
            classInput="inputPassword"
            required={true}
            refVal={passwordInput}
            onChangeinput={() => handleData(setPassword, passwordInput)}
            value={password}
            onChangeType={() => onChangeTypeInput(passwordInput)}
          />

          <Input
            type="password"
            textLabel="Confirma contraseña"
            icon="password"
            classInput="inputPassword"
            required={true}
            refVal={confirmPasswordInput}
            onChangeinput={() =>
              handleData(setConfirmPassword, confirmPasswordInput)
            }
            value={confirmPassword}
            onChangeType={() => onChangeTypeInput(confirmPasswordInput)}
          />

          <div className="contentInput">
            <select
              value={delegateCompany}
              ref={delegateCompanySelect}
              onChange={() =>
                handleData(setDelegateCompany, delegateCompanySelect)
              }
              required
            >
              <option value="">¿Perteneces a una empresa?</option>
              <option value="yes">Sí</option>
              <option value="no">No</option>
            </select>
          </div>

          <Input
            type="text"
            textLabel="Nombre de la empresa"
            icon="input"
            classInput="inputPassword"
            required={false}
            refVal={nameCompanyInput}
            onChangeinput={() => handleData(setNameCompany, nameCompanyInput)}
            value={nameCompany}
          />

          <div className="contentTerms">
            <input type="checkbox"></input>
            <p>Acepto los términos del servicio y la política de privacidad.</p>
          </div>

          <Button
            typeStyleButton="secondary1"
            textButton="Crear cuenta"
            typeButton="submit"
          />
          <span>Ó</span>
          <button className="signUpGoogle">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2875/2875404.png"
              alt="logo google"
            />
            Google
          </button>
        </form>
        <p>
          ¿Ya tienes cuenta? Ingresa &nbsp;
          <Link className="singInLink" to={`/login`}>
            aquí
          </Link>
        </p>
      </div>
    </section>
  );
}

export { CreateAccount };
