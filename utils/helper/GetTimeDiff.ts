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

export const getTimeDiff = (time : null | string) => {
    let currFullDateAndTime = `${currentMonth}/${currentDate}/${currentYear} ${currentHour}:${currentMinute}:${currentSecond}`;

    let endDate = new Date(time as string);
    let startDate = new Date(currFullDateAndTime);
    let timeDiff = endDate.getTime() - startDate.getTime();

    hourDiff = Math.abs(Math.floor(timeDiff / 1000 / 60 / 60) % 24);
    minuteDiff = Math.abs(Math.floor(timeDiff / 1000 / 60) % 60);
    secondDiff = Math.abs(Math.floor(timeDiff / 1000) % 60);

    return timeDiff;
}