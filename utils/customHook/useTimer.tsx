'use client'
import { useEffect, useRef, useState } from "react"

const useTimer = (time : number) => {
    const timeRef = useRef(time);

    const [hour, setHour] = useState<number>(Math.floor(timeRef.current/3600));
    const [minute, setMinute] = useState<number>(Math.floor(timeRef.current/60));
    const [second, setSecond] = useState<number>(Math.floor(timeRef.current % 60));

    useEffect(() => {
        let interval : NodeJS.Timeout | null = null;
        console.log(timeRef.current);

        // if(second > 60){
        //     setSecond(60)
        // }

        // if(second === 0){
        //     if(hour > 0 && minute === 0){
        //         setHour(hour => hour - 1);
        //         setMinute(60);
        //         setSecond(60);
        //     }else if(hour > 0 && minute > 0){
        //         setMinute(minute => minute - 1);
        //     }else if(hour === 0 && minute > 0){
        //         setMinute(minute => minute - 1);
        //         setSecond(60)
        //     } clearInterval(interval!);
        // }

        // if(second > 0){
        //     interval = setInterval(() => {
        //         setSecond(second => second - 1);
        //         if(minute === 60 && hour > 0){
        //             setHour(hour - 1);
        //         }
        //         if(minute === 60){
        //             setMinute(minute - 1);
        //         }
        //     }, 1000)
        // } else {
        //     clearInterval(interval!);
        // }

        return () => {
            clearInterval(interval!);
            timeRef.current = (hour * 3600) + (minute + 60) + second;
        }

    }, [minute, second, time]);

    return {hour, minute, second}
}

export default useTimer;