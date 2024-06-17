'use client'
import { useEffect, useRef, useState } from "react"

const useTimer = (time : string) => {
    
    const timeRef : string[] = time.split(':');
    const date : Date = new Date();
    const currentHour: number = parseInt(date.getHours().toLocaleString());
    const currentMinute: number = parseInt(date.getMinutes().toLocaleString());
    const currentSecond:number = parseInt(date.getSeconds().toLocaleString());

    const [hour, setHour] = useState<number>(currentHour);
    const [minute, setMinute] = useState<number>(currentMinute);
    const [second, setSecond] = useState<number | null>(null);

    useEffect(() => {
        if(second === null){
            setSecond(currentSecond);
        }
    }, []);
    // useEffect(() => {
    //     let interval : NodeJS.Timeout | null = null;
    //     console.log();

    //     // if(second > 60){
    //     //     setSecond(60)
    //     // }

    //     // if(second === 0){
    //     //     if(hour > 0 && minute === 0){
    //     //         setHour(hour => hour - 1);
    //     //         setMinute(60);
    //     //         setSecond(60);
    //     //     }else if(hour > 0 && minute > 0){
    //     //         setMinute(minute => minute - 1);
    //     //     }else if(hour === 0 && minute > 0){
    //     //         setMinute(minute => minute - 1);
    //     //         setSecond(60)
    //     //     } clearInterval(interval!);
    //     // }

    //     // if(second > 0){
    //     //     interval = setInterval(() => {
    //     //         setSecond(second => second - 1);
    //     //         if(minute === 60 && hour > 0){
    //     //             setHour(hour - 1);
    //     //         }
    //     //         if(minute === 60){
    //     //             setMinute(minute - 1);
    //     //         }
    //     //     }, 1000)
    //     // } else {
    //     //     clearInterval(interval!);
    //     // }

    //     return () => {
    //         clearInterval(interval!);
    //         timeRef.current = (hour * 3600) + (minute + 60) + second;
    //     }

    // }, [minute, second, time]);

    return {hour, minute, second}
}

export default useTimer;