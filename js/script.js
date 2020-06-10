let addButton = document.querySelector('.add-button');
// let addButton = document.getElementsByClassName('add-button'); не сработало событие onclick!!!!
let titleInput = document.getElementById('title-input');
let dateInput = document.getElementById('date-input');
let descriptionInput = document.getElementById('description-input');

let todoList = [];
if (localStorage.getItem('todo') != undefined) {
    todoList = JSON.parse(localStorage.getItem('todo'));
}
console.log(todoList);

for (const key in todoList) {
    if (todoList.hasOwnProperty(key)) {
        const element = todoList[key];
        console.log(element);
        addTodoItem(element);
    }
}

addButton.onclick = function (event) {
    //event.preventDefault();
    let title = titleInput.value;
    let date = dateInput.value;
    let description = descriptionInput.value;
    // добавление в локал сторадж, stringify преобразует массив в строку
    if (title != "" || date != "" || description != "") {
        let temp = {};
        temp.titleTodo = title;
        temp.dateTodo = date;
        temp.descTodo = description;
        temp.checkTodo = false;
        let i = todoList.length;
        todoList[i] = temp;
        console.log(todoList);
        localStorage.setItem('todo', JSON.stringify(todoList));
        addTodoItem(temp);
    }
};


function addTodoItem(todoArr) {
    
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
    let todoDateBlock = document.createElement('div');
    todoDateBlock.classList.add('todo-date');
    todoDateBlock.innerHTML = todoArr['dateTodo'];
    let todoDeleteBlock = document.createElement('button');
    todoDeleteBlock.classList.add('delete-button');
    todoDeleteBlock.innerHTML = "Delete todo";
    todoInformationBlock.appendChild(todoCheckBox);
    todoInformationBlock.appendChild(todoDateBlock);
    todoInformationBlock.appendChild(todoDeleteBlock);

    let todoDescBlock = document.createElement('div');
    todoDescBlock.classList.add('todo-descriptions');
    todoDescBlock.innerHTML = todoArr['descTodo'];

    newTodo.appendChild(titleBlock);
    newTodo.appendChild(todoDescBlock);
    newTodo.appendChild(todoInformationBlock);
    document.querySelector('.todo-fields').appendChild(newTodo);
}