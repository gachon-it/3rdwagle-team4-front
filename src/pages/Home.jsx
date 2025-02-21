import React from "react";
import Button from "../components/Button";
import "./Home.css";

export default function Home() {
    return (
        <div className="Home">
            <div className="home-header">
                <h1 className="home-title">프로젝트명</h1>
                <p className="home-slogan">슬로건이 들어가는 공간</p>
            </div>

            <div className="home-buttons">
                <Button text="이메일 로그인" type="primary"/>
                <Button text="회원가입" type="third" />
            </div>
        </div>
    );
}
