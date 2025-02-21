import "./HobbitList.css";
import { useState } from "react";

export default function HobbitList({ text, list, onHabitCheck }) {
  const [completedList, setCompletedList] = useState(
    list.reduce((acc, habit) => {
      acc[habit.habitId] = false;
      return acc;
    }, {})
  );

  // 체크박스 변경 시 호출
  const toggleCompleted = async (habitId) => {
    const newStatus = !completedList[habitId];

    // 상태 업데이트
    setCompletedList((prev) => ({
      ...prev,
      [habitId]: newStatus,
    }));

    try {
      const response = await fetch("/habit/checking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          habitId: habitId,
          complete: newStatus, // true or false
        }),
      });

      if (!response.ok) {
        throw new Error("서버 오류 발생");
      }

      console.log(`습관 ${habitId} 업데이트 성공: ${newStatus}`);

      // 체크할 때마다 레벨 증가
      if (newStatus && onHabitCheck) {
        onHabitCheck();
      }
    } catch (error) {
      console.error("습관 업데이트 실패:", error);
    }
  };

  return (
    <div className="HobbitList">
      <div className="HobbitList-title">{text}</div>
      {/* 습관 리스트 */}
      <div className="HobbitList-items">
        {list.map((habit) => (
          <div
            key={habit.habitId}
            className="HobbitList-item"
            onClick={() => toggleCompleted(habit.habitId)}
          >
            <input
              type="checkbox"
              checked={completedList[habit.habitId]}
              readOnly
            />
            <span>{habit.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
