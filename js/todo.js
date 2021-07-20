const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    })
    toDos = cleanToDos;
    saveToDos();
}


function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text){
    const list = document.createElement("li");
    const delBtn  = document.createElement("button");
    const span = document.createElement('span');
    const newId = toDos.length + 1;
    delBtn.innerText = "x";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    list.appendChild(span);
    list.appendChild(delBtn);
    list.id = newId;
    toDoList.appendChild(list);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){   
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}


function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null){
        const parseToDos = JSON.parse(loadedToDos);
        parseToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        })
    }
}


function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
    
}

init();
