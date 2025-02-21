import InputField from "../components/InputField";
import SelectField from "../components/SelectField";
import Button from "../components/Button";
import "./SignUpProfile.css";
import { UserStateContext } from "../App";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

export default function SignUpProfile() {
  const { setUserInfo } = useContext(UserStateContext);
  const navigate = useNavigate();

  // 🔥 상태 저장
  const [nickname, setNickname] = useState("");
  const [ageRange, setAgeRange] = useState("");
  const [gender, setGender] = useState("");
  const [loading, setLoading] = useState(false);

  const isComplete = nickname.trim() !== "" && ageRange !== "" && gender !== "";

  const handleNextClick = async () => {
    if (isComplete) return;

    setLoading(true);
    try {
      const response = await fetch("/member/register", {
        // ✅ URL 수정
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nickname, ageRange, gender }),
      });

      if (!response.ok) {
        throw new Error("회원가입 실패");
      }

      const data = await response.json();
      console.log("백엔드 응답:", data);

      const newUser = {
        id: data.data.memberId, // ✅ 백엔드 응답 구조에 맞게 수정
        nickname,
        ageRange,
        gender,
      };

      setUserInfo(newUser);
      localStorage.setItem("userInfo", JSON.stringify(newUser));

      navigate("/mission-new");
    } catch (error) {
      console.error("회원가입 중 오류 발생:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="SignUpProfile">
      <h2 className="signupprofile-header">프로필 설정</h2>
      <div className="signupprofile-inputfield">
        <InputField
          label="닉네임"
          placeholder="닉네임을 입력해 주세요"
          value={nickname} // 🔥 부모 상태 사용
          onChange={(e) => setNickname(e.target.value)} // 🔥 부모 상태 업데이트
        />
        <SelectField
          label="나이"
          options={["10대", "20대", "30대", "40대", "50대 이상"]}
          value={ageRange} // 🔥 부모 상태 사용
          onChange={setAgeRange} // 🔥 부모 상태 업데이트
        />
        <SelectField
          label="성별"
          options={["남자", "여자", "기타"]}
          value={gender} // 🔥 부모 상태 사용
          onChange={setGender} // 🔥 부모 상태 업데이트
        />
      </div>
      <div className="signupprofile-button">
        <Button
          text={loading ? "가입 중..." : "다음"}
          type={loading ? "second" : "primary"}
          disabled={isComplete}
          onClick={handleNextClick}
        />
      </div>
    </div>
  );
}
