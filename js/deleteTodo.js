let deleteButtons = document.getElementsByClassName('delete-button');
console.log(deleteButtons);
for (let i = 0; i < deleteButtons.length; i++) {
    console.log(deleteButtons[i]);
    deleteButtons[i].addEventListener("click", function(){deleteTodo(i);}, false);
    
}

function deleteTodo(i) {
    let todoItems = document.getElementsByClassName('todo-item');
    todoItems[i].remove();
    todoList.splice(i, 1);
    console.log(todoList);
    localStorage.setItem('todo', JSON.stringify(todoList));
}