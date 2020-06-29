let addButton = document.querySelector('.add-button');
// let addButton = document.getElementsByClassName('add-button'); не сработало событие onclick!!!!
let titleInput = document.getElementById('title-input');
let dateInput = document.getElementById('date-input');
let descriptionInput = document.getElementById('description-input');
addButton.addEventListener("click", addTask);

let todoList = [];
if (localStorage.getItem('todo') != undefined) {
    todoList = JSON.parse(localStorage.getItem('todo'));
}
console.log(todoList);

for (const key in todoList) {
    if (todoList.hasOwnProperty(key)) {
        const element = todoList[key];
        console.log(element);
        renderTodo(element);
    }
}


function addTask() {
    let title = titleInput.value;
    let date = dateInput.value;
    let description = descriptionInput.value;
    let id = getId();
    // добавление в локал сторадж, stringify преобразует массив в строку
    if (title != "" || date != "" || description != "") {
        let temp = {};
        temp.titleTodo = title;
        temp.dateTodo = date;
        temp.descTodo = description;
        temp.checkTodo = false;
        temp.idTodo = id;
        let i = todoList.length;
        todoList[i] = temp;
        addItemToLocalStorage();
        renderTodo(temp);
        clearInputs();
    }
}

function addItemToLocalStorage() {
    localStorage.setItem('todo', JSON.stringify(todoList));
}

function createTodoItem(todoArr) {

    let newTodo = document.createElement('div');
    newTodo.classList.add('todo-item');

    let titleBlock = document.createElement('div');
    titleBlock.classList.add('todo-name');
    let titleHeaderBlock = document.createElement('h2');
    titleHeaderBlock.classList.add('todo-title');
    titleHeaderBlock.innerHTML = todoArr['titleTodo'];
    titleBlock.appendChild(titleHeaderBlock);

    let todoInformationBlock = document.createElement('div');
    todoInformationBlock.classList.add('todo-information');
    let todoCheckBox = document.createElement('input');
    todoCheckBox.type = "checkbox";
    todoCheckBox.classList.add('todo-checkbox');
    if (todoArr['checkTodo']) {
        todoCheckBox.checked = true;
        newTodo.classList.add('crossing');
    }
    let todoDateBlock = document.createElement('div');
    todoDateBlock.classList.add('todo-date');
    todoDateBlock.innerHTML = todoArr['dateTodo'];
    let todoDeleteBlock = document.createElement('button');
    todoDeleteBlock.classList.add('delete-button');
    todoDeleteBlock.innerHTML = "<i class='fas fa-trash'></i>";
    todoInformationBlock.appendChild(todoCheckBox);
    todoInformationBlock.appendChild(todoDateBlock);
    todoInformationBlock.appendChild(todoDeleteBlock);

    let todoDescBlock = document.createElement('div');
    todoDescBlock.classList.add('todo-descriptions');
    todoDescBlock.innerHTML = todoArr['descTodo'];

    newTodo.appendChild(titleBlock);
    newTodo.appendChild(todoDescBlock);
    newTodo.appendChild(todoInformationBlock);
    newTodo.setAttribute('key', todoArr['idTodo']);
    return newTodo;
}

function renderTodo(todoArr) {
    let todoItem = createTodoItem(todoArr);
    document.querySelector('.todo-fields').appendChild(todoItem);
}

function clearInputs() {
    titleInput.value = "";
    dateInput.value = "";
    descriptionInput.value = "";
}

function getId() {
    return Math.random()
        .toExponential(36)
        .substring(2, 9);
}