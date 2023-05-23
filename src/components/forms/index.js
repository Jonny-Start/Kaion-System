import React from "react";
import "./forms.css";

function Input({
  value,
  type,
  id,
  classInput,
  textLabel,
  required,
  icon,
  refVal,
  onChangeinput,
  onChangeType,
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
    case "input":
      iconInput = <i className="fa-solid fa-feather-pointed"></i>;
      break;
    default:
      iconInput = "";
      break;
  }

  const [showPasword, setShowPasword] = React.useState(false);

  const changeTypeInput = () => {
    onChangeType();
    setShowPasword((prevState) => !prevState);
  };
  const errorInput = false;

  return (
    <div className="contentInput">
      <input
        type={type}
        value={value}
        ref={refVal}
        onChange={onChangeinput ? () => onChangeinput() : undefined}
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
          onClick={onChangeType ? () => changeTypeInput() : undefined}
        ></i>
      ) : (
        type === "password" && (
          <i
            className="fa-regular fa-eye iconAccompaniesInput"
            onClick={onChangeType ? () => changeTypeInput() : undefined}
          ></i>
        )
      )}
    </div>
  );
}

function Button({ typeStyleButton, textButton, typeButton, onAction }) {
  switch (typeStyleButton) {
    case "primary":
      return (
        <button
          className="buttonPrimary"
          type={typeButton ? typeButton : "button"}
          onClick={onAction ? () => onAction() : undefined}
        >
          {textButton ? textButton : "Text undefined"}
        </button>
      );
    case "secondary1":
      return (
        <button
          className="secondary1"
          type={typeButton ? typeButton : "button"}
          onClick={onAction ? () => onAction() : undefined}
        >
          {textButton ? textButton : "Text undefined"}
        </button>
      );
    case "secondary2":
      return (
        <button
          className="secondary2"
          type={typeButton ? typeButton : "button"}
          onClick={onAction ? () => onAction() : undefined}
        >
          {textButton ? textButton : "Text undefined"}
        </button>
      );
    case "secondary3":
      return (
        <button
          className="secondary3"
          type={typeButton ? typeButton : "button"}
          onClick={onAction ? () => onAction() : undefined}
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
