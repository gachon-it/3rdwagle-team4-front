import React, { useState } from "react";
import "./InputField.css";

function InputField({ label, type = "text", placeholder, onDuplicateCheck, showDuplicateCheck }) {
    const [value, setValue] = useState("");

    // 입력값 변경 핸들러
    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <label className="InputField">
            <h5>{label}</h5>
            <div className="input-wrapper">
                <input 
                    type={type} 
                    className="input-field" 
                    placeholder={placeholder} 
                    value={value}
                    onChange={handleChange}
                />
                {label === "이메일" && showDuplicateCheck && (
                    <button 
                        className="check-button"
                        type="button"
                        onClick={() => onDuplicateCheck(value)}
                    >
                        중복 확인
                    </button>
                )}
            </div>
        </label>
    );
}

export default InputField;
