const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector(".clock-title");

function putZeroOnTime(timeValue){
    if (timeValue < 10){
        return `0${timeValue}`;
    }
    else{
        return timeValue;
    }
}

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    // clockTitle.innerText = `${
    //     hours < 10? `0${hours}` : hours} : ${minutes} : ${
    //     seconds < 10 ? `0${seconds}` : seconds}`;
    clockTitle.innerText = `${putZeroOnTime(hours)}:${putZeroOnTime(minutes)}:${putZeroOnTime(seconds)}`;
}


function init() {
    setInterval(getTime, 1000);
}

init();
