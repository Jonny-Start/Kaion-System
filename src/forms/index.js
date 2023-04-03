import React from "react";
import "./forms.css";

function Input({
    value,
    type,
    placeholder,
    id,
    classInput,
    textLabel,
    required,
    icon
}) {
    let iconInput
    switch (icon) {
        case "email":
            iconInput = <i class="fa-solid fa-envelope"></i>;
            break;
        case "password":
            iconInput = <i class="fa-solid fa-lock"></i>;
            break;
        case "phone":
            iconInput = <i class="fa-solid fa-phone"></i>;
            break;
        default:
            iconInput = '';
            break;
    }
    const errorInput = false;


    return (
        <div className="contentInput">
            <input
                type={type}
                value={value}
                placeholder={placeholder}
                id={id ? id : `input${placeholder}`}
                className={`${classInput} ${errorInput && 'error'}`}
            />

            <label htmlFor={id ? id : `input${placeholder}`}>
                {iconInput} {textLabel ? textLabel : "label undefined"}
            </label>
            {errorInput && <i class="fa-solid fa-exclamation"></i>}
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
