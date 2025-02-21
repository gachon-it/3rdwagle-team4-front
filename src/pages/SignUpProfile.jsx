import InputField from "../components/InputField";
import SelectField from "../components/SelectField";
import Button from "../components/Button";
import "./SignUpProfile.css";

export default function SignUpProfile() {
    return (
        <div className="SignUpProfile">
            <h2 className="signupprofile-header">프로필 설정</h2>
            <div className="signupprofile-inputfiled">
                <InputField label="닉네임" placeholder="닉네임을 입력해 주세요" />
                <SelectField label="나이" options={["10대", "20대", "30대", "40대", "50대 이상"]} />
                <SelectField label="성별" options={["남자", "여자", "기타"]} />
            </div>
            <div className="signupprofile-button">
                <Button text="다음" disabled={true} />
            </div>
        </div>
    );
}
