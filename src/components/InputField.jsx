import React from "react";
import "./InputField.css";

function InputField({ label, type = "text", placeholder }) {
    return (
        <label className="input-label">
        <h5>{label}</h5>
        <input type={type} className="input-field" placeholder={placeholder} />
        </label>
    );
}

export default InputField;
