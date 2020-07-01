// как будет работать сортировка
function sortItemByAscendingDate(element) {
    console.log(element);
    // 1. копируем массив объектов todoList
    let copyTodoList = todoList.slice();
    // 2. сортируем скопированный массив по дате
    copyTodoList.sort(function (a, b) {
        let dateA = new Date(a.dateTodo),
            dateB = new Date(b.dateTodo);
        return dateA - dateB; //сортировка по возрастающей дате
    });    
    // 3. вызываем перерисовку сортировынных тудушек 
    renderSortedTodo(element, copyTodoList);
}
function sortItemByDscendingDate(element) {
    console.log(element);
    // 1. копируем массив объектов todoList
    let copyTodoList = todoList.slice();
    // 2. сортируем скопированный массив по дате
    copyTodoList.sort(function (a, b) {
        let dateA = new Date(a.dateTodo),
            dateB = new Date(b.dateTodo);
        return dateB - dateA; //сортировка по возрастающей дате
    });
    // 3. вызываем перерисовку сортировынных тудушек 
    renderSortedTodo(element, copyTodoList);
}

function renderSortedTodo(element, copyTodoList) {
    // 4. очишаем поле todo-fields
    element.innerHTML = "";
    // 5. отрисовываем сортированные todo элементы
    for (const key in copyTodoList) {
        if (copyTodoList.hasOwnProperty(key)) {
            const element = copyTodoList[key];
            console.log(element);
            renderTodo(element);
        }
    }
}