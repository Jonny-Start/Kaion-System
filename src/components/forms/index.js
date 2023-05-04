import React from "react";
import "./forms.css";

function Input({
  value,
  type,
  // placeholder,
  id,
  classInput,
  textLabel,
  required,
  icon,
}) {
  let iconInput;
  switch (icon) {
    case "email":
      iconInput = <i className="fa-solid fa-envelope"></i>;
      break;
    case "password":
      iconInput = <i className="fa-solid fa-lock"></i>;
      break;
    case "phone":
      iconInput = <i className="fa-solid fa-phone"></i>;
      break;
    default:
      iconInput = "";
      break;
  }

  const changeTypeInput = () => alert("cambio");
  const errorInput = false;
  const showPasword = false;

  return (
    <div className="contentInput">
      <input
        type={type}
        value={value}
        // placeholder={placeholder}
        id={id ? id : `input${textLabel}`}
        className={`${classInput} ${errorInput && "error"} ${
          value ? "active" : ""
        }`}
      />

      <label htmlFor={id ? id : `input${textLabel}`}>
        {iconInput} {textLabel ? textLabel : "label undefined"}
        {!!required && <span className="inputRequired">*</span>}
      </label>

      {errorInput && type !== "password" && (
        <i className="fa-solid fa-exclamation iconAccompaniesInput"></i>
      )}

      {type === "password" && !!showPasword ? (
        <i
        className="fa-regular fa-eye-slash iconAccompaniesInput"
          onClick={() => changeTypeInput()}
        ></i>
      ) : (
        type === "password" && (
          <i
          className="fa-regular fa-eye iconAccompaniesInput"
            onClick={() => changeTypeInput()}
          ></i>
        )
      )}
    </div>
  );
}

function Button({ typeStyleButton, textButton, typeButton }) {
  switch (typeStyleButton) {
    case "primary":
      return (
        <button
          className="buttonPrimary"
          type={typeButton ? typeButton : "button"}
        >
          {textButton ? textButton : "Text undefined"}
        </button>
      );
    case "secondary1":
      return (
        <button
          className="secondary1"
          type={typeButton ? typeButton : "button"}
        >
          {textButton ? textButton : "Text undefined"}
        </button>
      );
    case "secondary2":
      return (
        <button
          className="secondary2"
          type={typeButton ? typeButton : "button"}
        >
          {textButton ? textButton : "Text undefined"}
        </button>
      );
    case "secondary3":
      return (
        <button
          className="secondary3"
          type={typeButton ? typeButton : "button"}
        >
          {textButton ? textButton : "Text undefined"}
        </button>
      );
    default:
      return (
        <button className="" type="">
          Undefined
        </button>
      );
  }
}

export { Input, Button };
