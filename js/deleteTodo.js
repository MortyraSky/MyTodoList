document.querySelector('.todo-fields').addEventListener("click", deleteTodo, true);
console.log("---------------------------------------------");

function deleteTodo(event) {
    const targetDelete = event.target;
    
    if (targetDelete.type == "submit") {
        const todoItem = targetDelete.parentNode.parentNode;
        let keyItem = todoItem.getAttribute("key");
        deleteTasks(todoItem, keyItem);
    }
    else if (targetDelete.tagName == "I") {
        const todoItem = targetDelete.parentNode.parentNode.parentNode;
        let keyItem = todoItem.getAttribute("key");
        deleteTasks(todoItem, keyItem);
    }
}

function deleteTasks(node, key) {
    node.remove();
    todoList.splice(todoList.findIndex(item => item.idTodo === key), 1);
    addItemToLocalStorage();
  }