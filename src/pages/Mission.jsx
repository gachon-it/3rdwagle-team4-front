    import { IoChevronForwardOutline } from "react-icons/io5";
    import HomeMenu from "../components/Profile/HomeMenu"
    import HobbitList from "../components/HobbitList"
    import Button from "../components/Button"
    import "./Mission.css";

    export default function Mission() {
        return (
        <div className="Mission">
            {/* 달력 헤더 */}
            <h2 className="checklist-title">CHECK LIST</h2>
            <div className="calender">
            <div className="calendar-header">
                <button>{"<"}</button>
                <span>2025.02</span>
                <button>{">"}</button>
            </div>

            {/* 요일 */}
            <div className="weekdays">
                <span className="sunday">일</span>
                <span>월</span>
                <span>화</span>
                <span>수</span>
                <span>목</span>
                <span>금</span>
                <span>토</span>
            </div>

            {/* 날짜 */}
            <div className="dates">
                <span>16</span>
                <span>17</span>
                <span>18</span>
                <span>19</span>
                <span>20</span>
                <span>21</span>
                <span className="selected">22</span>
            </div>

        </div>
        
        <div className="habbit-list">
            <HobbitList/>
        </div>   


        <div className="habbit-add">
            <Button text={"습관 추가"} type={"primary"}/>
        </div>

        <div className="habbit-menu">
            <HomeMenu />
        </div>
        
    </div>
        );
    }
