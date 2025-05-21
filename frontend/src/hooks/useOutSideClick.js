import { useEffect, useRef } from "react";

export default function useOutSideClick(cb) {
    const itemRef = useRef()
    useEffect(() => {
        document.addEventListener('mousedown', outSideClick)
    }, [itemRef])

    function outSideClick(e) {
        if (
            itemRef.current &&
            !itemRef.current.contains(e.target)
        ) {
            cb()
        }
    }

    return { itemRef }
}