import React from "react";
import './forms.css'

function Input({
    value,
    type,
    placeholder,
    id,
    classInput,
    textLabel,
    required
}) {
    return (
        <div className="contentInput">
            <span>Hola</span>
            <label htmlFor={(id ? id : `input${placeholder}`)}>{textLabel ? textLabel : 'label undefined'}</label>
            <input
                type={type}
                value={value}
                placeholder={placeholder}
                id={(id ? id : `input${placeholder}`)}
                className={`${classInput}`}
            />
        </div>
    );
}

function Button({
    typeStyleButton,
    textButton,
    typeButton
}) {
    switch (typeStyleButton) {
        case 'primary':
            return (
                <button className="buttonPrimary" type={typeButton ? typeButton : 'button'}>{textButton ? textButton : 'Text undefined'}</button>
            );
        case 'secondary1':
            return (
                <button className="secondary1" type={typeButton ? typeButton : 'button'}>{textButton ? textButton : 'Text undefined'}</button>
            );
        case 'secondary2':
            return (
                <button className="secondary2" type={typeButton ? typeButton : 'button'}>{textButton ? textButton : 'Text undefined'}</button>
            );
        case 'secondary3':
            return (
                <button className="secondary3" type={typeButton ? typeButton : 'button'}>{textButton ? textButton : 'Text undefined'}</button>
            );
        default:
            return (
                <button className="" type=''>Undefined</button>
            );
    }
}

export { Input, Button }
