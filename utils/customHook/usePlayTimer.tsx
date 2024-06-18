import { useEffect, useState } from "react";

interface ITimeDiff {
    hourDiff: number | null,
    minuteDiff: number | null,
    secondDiff: number | null
}

const usePlayTimer = (time : string | null) => {
    const [hour, setHour] = useState<number | null>(null);
    const [minute, setMinute] = useState<number | null>(null);
    const [second, setSecond] = useState<number | null>(null);

    const date: Date = new Date();
    let currentDate = date.getDate();
    let currentMonth = date.getMonth() + 1;
    let currentYear = date.getFullYear()
    let currentHour = date.getHours();
    let currentMinute = date.getMinutes();
    let currentSecond = date.getSeconds();

    let hourDiff: number;
    let minuteDiff: number;
    let secondDiff: number;

    // function to get time diff
    const getTimeDiff = () => {
        let currFullDateAndTime = `${currentMonth}/${currentDate}/${currentYear} ${currentHour}:${currentMinute}:${currentSecond}`;

        let endDate = new Date(time as string);
        let startDate = new Date(currFullDateAndTime);
        let timeDiff = endDate.getTime() - startDate.getTime();

        hourDiff = Math.abs(Math.floor(timeDiff / 1000 / 60 / 60) % 24);
        minuteDiff = Math.abs(Math.floor(timeDiff / 1000 / 60) % 60);
        secondDiff = Math.abs(Math.floor(timeDiff / 1000) % 60);
    }

    if(time !== null){
        getTimeDiff();
    }
    useEffect(() => {
        let interval: NodeJS.Timeout | null = null; 

        if(time === null){
            setHour(0);
            setMinute(0);
            setSecond(0);
        }
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

    return {hour, minute, second}
}

export default usePlayTimer;