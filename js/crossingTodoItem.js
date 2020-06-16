let checkboxes = document.getElementsByClassName('todo-checkbox');
console.log("---------------------------------------------")
for (let i = 0; i < checkboxes.length; i++) {
    console.log(checkboxes[i]);
    checkboxes[i].addEventListener("click", function(){enableCheckBox(i);}, false);
    // checkboxes[i].addEventListener("click", function(){crossingTodo();}, false);
}

function enableCheckBox(i) {
    // наверное, надо передавать номер чекбокса, и по номеру чекбокса записывать свойство сhecked в todoList
    //
    let todoItems = document.getElementsByClassName('todo-item');
    if (todoList[i - 1].checkTodo) {
        todoList[i - 1].checkTodo = false;        
        todoItems[i].classList.remove('crossing');
    }
    else {
        todoList[i - 1].checkTodo = true;
        todoItems[i].classList.add('crossing');
    }
    console.log(i);
    console.log(todoList[i - 1].checkTodo); // убрать i - 1, тк 1элемент не вкл в todoList
    // todoList[i - 1].checkTodo = true;
    localStorage.setItem('todo', JSON.stringify(todoList));
}

function crossingTodo(i) {
    let todoItems = document.getElementsByClassName('todo-item');
    todoItems[i].classList.add('crossing');
}


