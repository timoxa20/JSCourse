import {useCallback, useRef} from "react";

interface useDebounceProps {
    callback: (args: any) => void;
    delay: number;
}

export default function useDebounce(callback: useDebounceProps["callback"], delay: useDebounceProps["delay"]) {
    const timer = useRef<number | undefined>(undefined);

    return useCallback((args: any) => {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = setTimeout(() => {
            callback(args);
        }, delay);
    }, [callback, delay]);
}