'use client'
import { useEffect, useRef, useState } from "react"

const useTimer = (time : string) => {
    const [hour, setHour] = useState<number | null>(null);
    const [minute, setMinute] = useState<number | null>(null);
    const [second, setSecond] = useState<number | null>(null);
    // get all time references
    const timeRef : number[] = time.split(':').map(time => parseInt(time));
    const date : Date = new Date();
    const currentHour: number = parseInt(date.getHours().toLocaleString());
    const currentMinute: number = parseInt(date.getMinutes().toLocaleString());
    const currentSecond:number = parseInt(date.getSeconds().toLocaleString());

    let secondDiff: number;
    let minuteDiff: number;
    let hourDiff: number;
    // count time differences with current time
    secondDiff = (60 - currentSecond) + timeRef[2];
    if(secondDiff === 60 || secondDiff === 0){
        minuteDiff = timeRef[1] - currentMinute;
    }else{
        minuteDiff = (timeRef[1] - currentMinute) - 1;
    }
    if(minuteDiff === 60 || minuteDiff === 0){
        hourDiff = timeRef[0] - currentHour - 1;
    }else{
        hourDiff = timeRef[0] - currentHour;
    }

    console.log(hourDiff, minuteDiff, secondDiff);

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null; 

        if(second === null || hour === null || minute === null){
            setHour(hourDiff);
            setMinute(minuteDiff);
            setSecond(secondDiff);
        }
        
        if(second !== null && second === 0){
            if(hour! > 0){
                if(minute === 0){
                    setSecond(60);
                    setMinute(60);
                    setHour(hour! - 1);
                }else if(minute! > 0){
                    setSecond(60);
                    setMinute(minute! - 1);
                }
            }else if(hour === 0){
                if(minute! > 0){
                    setSecond(60);
                    setMinute(minute! - 1);
                }else{
                    clearInterval(interval!);
                }
            }
        }

        if(second !== null && second > 0){
            interval = setInterval(() => {
                setSecond(second => second! - 1);
                if(minute! === 60 && hour! > 0){
                    setHour(hour! - 1);
                }
                if(minute! === 60){
                    setMinute(minute! - 1);
                }
            }, 1000)
        } else {
            clearInterval(interval!);
        }

        return () => {
            clearInterval(interval!);
        }

    }, [minute, second]);

    console.log(timeRef)

    return {hour, minute, second}
}

export default useTimer;