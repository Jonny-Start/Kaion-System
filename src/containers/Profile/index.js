import React from "react";
import "./Profile.css";
import { BasicLayout } from "../../components/BasicLayout";
import { Button, Input } from "../../components/forms";

function Profile() {
  const [showContentPasword, setShowContentPasword] = React.useState(false);

  const viewChangePasword = () => {
    setShowContentPasword((prevState) => !prevState);
  };

  return (
    <BasicLayout idContent="Profile" backgroundImage={true}>
      <div className="contentProfile">
        <div className="coif">
          <Input
            type="text"
            textLabel="Nombre completo"
            icon="input"
            classInput="inputText widthMax"
            required={true}
            // refVal={emailInput}
            // onChangeinput={() => handleUser()}
            // value={email}
          />
          <Input
            type="text"
            textLabel="Apodo"
            icon="input"
            classInput="inputText widthMax"
            required={true}
            // refVal={emailInput}
            // onChangeinput={() => handleUser()}
            // value={email}
          />
        </div>
        <div className="cois">
          <Input
            type="number"
            textLabel="Prefijo"
            classInput="inputText widthMax"
            required={true}
            // refVal={emailInput}
            // onChangeinput={() => handleUser()}
            // value={email}
          />
          <Input
            type="number"
            textLabel="Numero de telefono"
            icon="phone"
            classInput="inputText widthMax"
            required={true}
            // refVal={emailInput}
            // onChangeinput={() => handleUser()}
            // value={email}
          />
        </div>
        <div className="coit">
          <Input
            type="text"
            textLabel="Nombre de empresa"
            icon="input"
            classInput="inputText widthMax"
            required={true}
            // refVal={emailInput}
            // onChangeinput={() => handleUser()}
            // value={email}
          />
          <Input
            type="text"
            textLabel="Empresa delegadora"
            icon="input"
            classInput="inputText widthMax"
            required={true}
            // refVal={emailInput}
            // onChangeinput={() => handleUser()}
            // value={email}
          />
        </div>

        <Input
          type="text"
          textLabel="Correo electrónico"
          icon="input"
          classInput="inputText widthMax"
          required={true}
          // refVal={emailInput}
          // onChangeinput={() => handleUser()}
          // value={email}
        />

        <div className="contentButtons">
          <Button
            typeStyleButton="secondary2"
            textButton="Cambiar contraseña"
            typeButton="button"
            onAction={() => viewChangePasword()}
          />
          <Button
            typeStyleButton="secondary1"
            textButton="Guardar"
            typeButton="submit"
          />
        </div>

        {showContentPasword && (
          <section className="contentChangePassword">
            <h2>Cambio de contraseña</h2>
            <Input
              type="password"
              textLabel="Contraseña actual"
              icon="password"
              classInput="inputPassword widthMax"
              required={true}
              // refVal={emailInput}
              // onChangeinput={() => handleUser()}
              // value={email}
            />
            <Input
              type="password"
              textLabel="Nueva contraseña"
              icon="password"
              classInput="inputPassword widthMax"
              required={true}
              // refVal={emailInput}
              // onChangeinput={() => handleUser()}
              // value={email}
            />
            <Input
              type="password"
              textLabel="Confirma contraseña"
              icon="password"
              classInput="inputPassword widthMax"
              required={true}
              // refVal={emailInput}
              // onChangeinput={() => handleUser()}
              // value={email}
            />
            <Button
              typeStyleButton="secondary1"
              textButton="Cambiar contraseña"
              typeButton="submit"
            />
          </section>
        )}
      </div>
    </BasicLayout>
  );
}

export { Profile };
