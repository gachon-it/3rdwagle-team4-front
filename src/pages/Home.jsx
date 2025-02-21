import {  getCharacterImage } from "../util/get-character-image"

export default function Home() {
    const day = 30
    const emotionId = 1
    return (
    <div className="Home">
        <div className="home-header">
            습관 달성까지 {day}일째
        </div>
        <div className="home-character">
            <img src={getCharacterImage(emotionId)}/>
        </div>
        
    </div>
    )
}