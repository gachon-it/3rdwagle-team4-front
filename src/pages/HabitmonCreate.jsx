import "./HabitmonCreate.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import habitmon1 from "../assets/habitmon1.png";
import Button from "../components/Button";

const HabitmonCreate = () => {
  const [habitmonName, setHabitmonName] = useState("");
  const navigate = useNavigate;

  const handleInputChange = (e) => {
    setHabitmonName(e.target.value);
  };

  const handleButtonClick = () => {
    if (habitmonName) {
      navigate("/habitmonConfirm");
    }
  };

  return (
    <div className="habitmon-container">
      <div className="Little-habitmon">
        <img src={habitmon1} alt="Habitmon" className="habitmon-image" />
        <input
          type="text"
          placeholder="습관몬"
          value={habitmonName}
          onChange={handleInputChange}
          className="habitmon-input"
        />
        <p className="habitmon-subtext">이제 나만의 습관 이름을 지어줘요</p>
      </div>
      <div className="habitmon-button">
        <Button
          text="완료"
          type={habitmonName ? "primary" : ""}
          onClick={handleButtonClick}
        />
      </div>
    </div>
  );
};

export default HabitmonCreate;
