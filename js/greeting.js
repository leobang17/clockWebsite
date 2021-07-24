const form = document.querySelector(".js-form");
const input = document.querySelector("input");
const greeting = document.querySelector(".js-greetings");
const date = new Date();
const hour = date.getDate();


const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function saveName(name) {
    localStorage.setItem(USER_LS, name);
}

function eraseName() {
    localStorage.removeItem(USER_LS);
    form.classList.add(SHOWING_CN);
    greeting.classList.remove(SHOWING_CN);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue= input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}


function handleClick(){
    eraseName();
}

function ifClickEraseName(){
    greeting.addEventListener("click", handleClick, false);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit)
}

function paintGreeting(textArg){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN, "pointer");
    if (hour >= 5 && hour < 11){
        greeting.innerText = `Good Morning, ${textArg}.`;
    }
    else if (hour >= 11 && hour < 5) {
        greeting.innerText = `Good Afternoon, ${textArg}.`;
    }
    else if (hour >= 5 && hour < 10) {
        greeting.innerText = `Good Evening, ${textArg}.`;
    } 
    else {
        greeting.innerText = `Good Night, ${textArg}.`;
    }
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    console.log("no current user")
    if (currentUser === null){
        askForName();
    }
    else {
        paintGreeting(currentUser);    
        ifClickEraseName();
    }
}


function init(){
    loadName();
}

init();