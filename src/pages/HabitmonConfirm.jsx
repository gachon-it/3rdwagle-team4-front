import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./HabitmonConfirm.css";
import habbitmon0 from "../assets/habbitmon0.png";
import Button from "../components/Button";

const HabitmonConfirm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const habitmonName = location.state?.habitmonName || "습관몬";

  const handleButtonClick = () => {
    if (habitmonName) {
      navigate("/");
    }
  };

  return (
    <div className="habitmon-confirm-container">
      <div className="habitmon-little">
        <p className="habitmon-confirm-title">
          내가 키울 습관 이름은 <br />
          <span className="habitmon-highlight">{habitmonName}!</span>
        </p>
        <img
          src={habbitmon0}
          alt="Habitmon"
          className="habitmon-confirm-image"
        />
        <p className="habitmon-confirm-text">
          습관을 매일매일 지킬 때마다 <br />
          <span className="habitmon-highlight">{habitmonName}</span>도 자라날
          거예요
        </p>
      </div>
      <div className="habitmon-button">
        <Button
          text="확인"
          type={habitmonName ? "primary" : ""}
          onClick={handleButtonClick}
        />
      </div>
    </div>
  );
};

export default HabitmonConfirm;
