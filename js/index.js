const title = document.querySelector("#title");
// title.innerHTML = "Hi! From JS";
// title.style.color = "red";
// document.title = "I own you now";

const BASE_COLOR = "navy";
const OTHER_COLOR = "maroon";
const CLICKED_CLASS = "clicked";

function handleResize(event){
    console.log(event);
}

function handleClick(){
    const currentClass = title.classList;
    if (!currentClass.contains(CLICKED_CLASS)) {
        title.classList.add(CLICKED_CLASS);
    }
    else {
        title.classList.remove(CLICKED_CLASS);
    }
}

// function init(){ 
//     // title.style.color = BASE_COLOR;
//     // title.addEventListener("click", handleClick);
// }
// init();
// window.addEventListener("resize", handleResize);
title.addEventListener("click", handleClick);