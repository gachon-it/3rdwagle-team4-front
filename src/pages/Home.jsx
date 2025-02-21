import HomeMenu from "../components/Profile/HomeMenu";
import HobbitList from "../components/HobbitList";
import { getCharacterImage } from "../util/get-character-image";
import { IoCheckmarkCircle } from "react-icons/io5";
import "./Home.css";
export default function Home() {
  const nickname = "습관이";
  const day = 30;
  const habbitmonId = 1;
  const level = 5;
  const xp = 190;
  const maxXp = 500;
  const progress = (xp / maxXp) * 100;

  return (
    <div className="Home">
      <div className="home-header">습관 달성까지 {day}일째</div>
      <div className="home-character">
        <img src={getCharacterImage(habbitmonId)} />
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

      <HobbitList />
      <HomeMenu />
    </div>
  );
}
