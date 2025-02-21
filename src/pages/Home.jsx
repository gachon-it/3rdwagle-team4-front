import HomeMenu from "../components/Profile/Homemenu"
import {  getCharacterImage } from "../util/get-character-image"
import { IoCheckmarkCircle } from "react-icons/io5"; 
import "./Home.css"
export default function Home() {
    const nickname = "습관이"
    const day = 30
    const emotionId = 1
    const level = 5
    const xp = 190
    const maxXp = 500
    const progress = (xp / maxXp) * 100

    return (
    <div className="Home">
        <div className="home-header">
            습관 달성까지 {day}일째
        </div>
        <div className="home-character">
            <img src={getCharacterImage(emotionId)}/>
            <h4>{nickname}</h4>
        </div>

        <div className="home-character-info">
            <div className="level">레벨 {level}</div>
            <div className="xp">경험치 {xp}</div>
            <div className="xp-bar-container">
        
        <div className="xp-bar" style={{ width: `${progress}%` }}></div>
        </div>
        
        <div className="xp-percent">{progress.toFixed(0)}%</div>
        </div>

        <div className="home-habbit-list">
            <div className="habit-title">
                🌱 오늘의 습관리스트 달성해요!
            </div>

            {/* 습관 리스트 */}
            <div className="habit-items">
                <div className="habit-item">
                <input type="checkbox"/>
                <span>물 2L 마시기</span>
                </div>
                <div className="habit-item">
                <input type="checkbox"/>
                <span>책 100p 읽기</span>
                </div>
            </div>

            {/* 보상 아이콘 */}

        </div>
        <HomeMenu />
    </div>
    )
}
