import "./MissionNew.css";
import InputField from "../components/InputField"
import HobbitList from "../components/HobbitList"
import Button from "../components/Button"
import HomeMenu from "../components/Profile/HomeMenu"
export default function MissionNew () {
    return(
        <div className="MissionNew">
            <div className="missionnew-header">
                <div className="">매일 지킬 습관을 만들어봐요</div>
                <div className="">지금 많은 20대들이 <u>일찍 일어나기</u>에 도전하고 있어요</div>
            </div>
            <div className="missionnew-create-hobbit">
                <InputField label={"습관 만들기"} placeholder={"할 일 입력"} />
            </div>

            <div className="missionnew-create-date">
                <div className="challenge">챌린지 기간</div>
                <div className="date">
                    <input type="date" />
                    <span>~</span>
                    <input type="date"/>
                </div>

            </div>



            <div className="habbit-add">
                <Button text={"습관 추가"} type={"primary"}/>
            </div>
            <div className="habbit-menu">
                <HomeMenu />
            </div>

        </div>
    )
}