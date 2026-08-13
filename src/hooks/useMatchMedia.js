import { useState, useEffect } from "react";

export default function useMatchMedia (mediaQuery) {
    const [isMetching, setIsMetching] = useState();

    useEffect(() => {
        setIsMetching(window.matchMedia(mediaQuery).matches);

        const windowResizeHandler = () => {
            setIsMetching(window.matchMedia(mediaQuery).matches);
        }

        window.addEventListener('resize', windowResizeHandler);

        return () => {
            window.removeEventListener('resize', windowResizeHandler);
        }
    }, []);

    return isMetching;
}