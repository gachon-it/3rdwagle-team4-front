import "./BackButton.css";
import { IoArrowBackOutline } from "react-icons/io5";

export default function BackButton() {
    return (
        <button className="back-button">
        <IoArrowBackOutline className="back-icon" />
        <span>프로필로 돌아가기</span>
        </button>
    );
}
