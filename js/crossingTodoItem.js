document.querySelector('.todo-fields').addEventListener("click", enableCheckBox, true);
console.log("---------------------------------------------");

function enableCheckBox(event) {
    const targetCheck = event.target;
    const todoItem = targetCheck.parentNode.parentNode;
    let keyItem = todoItem.getAttribute("key");
    // наверное, надо передавать номер чекбокса, и по номеру чекбокса записывать свойство сhecked в todoList
    if (targetCheck.type == "checkbox") {
        if (targetCheck.checked) {
            todoItem.classList.add("crossing");
            let element = getTodoItemByKey(keyItem);
            element['checkTodo'] = true;
            addItemToLocalStorage();
        } else {
            todoItem.classList.remove("crossing");
            let element = getTodoItemByKey(keyItem);
            element['checkTodo'] = false;
            addItemToLocalStorage();
        }
    }
}

function getTodoItemByKey(keyItem) {
    let key;
    for (key in todoList) {
        const element = todoList[key];
        for (const prop in element) {
            if (element[prop] == keyItem) {
                console.log(element);
                break;
            }
        }
    }
    return todoList[key];
}