import { useRef } from "react";

export default function useReadFileInput(setImg) {
    const inputRef = useRef()

    const onImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImg(reader.result);
            };
            reader.readAsDataURL(file);
        }
    }

    return { onImageChange, inputRef }
}