'use client';

import { useEffect, useState } from "react";

export const useTimer = (count : number) => {
    const [start, setStart] = useState<boolean>(true);
    const [hour, setHour] = useState<number>(Math.floor(count / 1000 / 60 / 60) % 24);
    const [minute, setMinute] = useState<number>(Math.floor(count / 1000 / 60) % 60);
    const [second, setSecond] = useState<number>(Math.floor(count / 1000) % 60);

    useEffect(() => {
        let interval : NodeJS.Timeout | null = null;

        if(!start){
            return;
        }

        if(start){
            if(second === 60){
                setSecond(second => second - 1);
            }
            if(second === 0){
                if(hour === 0){
                    if(minute === 0){
                        clearInterval(interval!);
                        setStart(!start);
                    }else{
                        setMinute(minute => minute - 1);
                        setSecond(second => second + 60);
                    }
                }else{
                    setHour(hour => hour - 1);
                    setSecond(second => second + 60);
                    if(minute === 0){
                        setMinute(minute => minute + 60);
                    }else{
                        setMinute(minute => minute - 1);
                    }
                }
            }

            if(second > 0){
                interval = setInterval(() => {
                    setSecond(second => second - 1);
                    if(minute === 60 && hour > 0){
                        setHour(hour => hour - 1);
                    }
                    if(minute === 60){
                        setMinute(minute => minute - 1)
                    }
                }, 1000)
            } else {
                clearInterval(interval!);
            }
        }
        return () => {
            clearInterval(interval!);
        }
    }, [hour, minute, second, start, count]);

    return {hour, minute, second};
}