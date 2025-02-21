import React from "react";
import "./CheckboxGroup.css";




function CheckboxGroup() {
    const terms = [
        "전체 동의",
        "만 14세 이상 가입 동의 (필수)",
        "서비스 이용 동의 (필수)",
        "개인정보처리방침 동의 (필수)"
    ];
    
    return (
        <div className="CheckboxGroup">
        {terms.map((option, index) => (
            <label key={index} className="agreement-item">
            <input type="checkbox" className="check-option" />
            {option}
            </label>
        ))}
        </div>
    );
}

export default CheckboxGroup;
