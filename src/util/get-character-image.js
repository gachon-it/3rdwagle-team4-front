import habbitmon from './../assets/habbitmon.png'

// 감정에 따라 이미지 다르게 나오도록 설정함. App.jsx로 보냄
export function getCharacterImage(habbitmonId) {
    switch (habbitmonId) {
        case 1:
            return habbitmon;
        default:
            return null;
    }
}