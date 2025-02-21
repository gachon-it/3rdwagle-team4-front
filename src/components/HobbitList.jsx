import "./HobbitList.css"
export default function HobbitList() {
    return (
        <div className="HobbitList">
            <div className="HobbitList-title">
                🌱 오늘의 습관리스트 달성해요!
            </div>

            {/* 습관 리스트 */}
            <div className="HobbitList-items">
                <div className="HobbitList-item">
                <input type="checkbox"/>
                <span>물 2L 마시기</span>
                </div>
                <div className="HobbitList-item">
                <input type="checkbox"/>
                <span>책 100p 읽기</span>
                </div>
            </div>
        </div>
    )
}