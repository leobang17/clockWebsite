const form = document.querySelector(".js-form");
const input = document.querySelector("input");
const greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function saveName(name) {
    localStorage.setItem(USER_LS, name);
}

function eraseName() {
    localStorage.clear();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue= input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}


function handleClick(){
    eraseName();
    console.log("fuck you");
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
    greeting.innerText = `Hello ${textArg}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    console.log("no current user")
    if (currentUser === null){
        askForName();
    }
    else {
        paintGreeting(currentUser);
    }
}


function init(){
    loadName();

}

init();