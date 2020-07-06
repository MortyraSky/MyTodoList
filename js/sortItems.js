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

function sortItemByDescendingDate(element) {
    console.log(element);
    // 1. копируем массив объектов todoList
    let copyTodoList = todoList.slice();
    // 2. сортируем скопированный массив по дате
    copyTodoList.sort(function (a, b) {
        let dateA = new Date(a.dateTodo),
            dateB = new Date(b.dateTodo);
        return dateB - dateA;
    });
    // 3. вызываем перерисовку сортировынных тудушек 
    renderSortedTodo(element, copyTodoList);
}

function sortItemByAscendingTitle(element) {
    let copyTodoList = todoList.slice();
    // 2. сортируем скопированный массив по дате
    copyTodoList.sort(function (a, b) {
        let nameA = a.titleTodo.toLowerCase(),
            nameB = b.titleTodo.toLowerCase();
        if (nameA < nameB) //сортируем строки по возрастанию
            return -1;
        if (nameA > nameB)
            return 1;
        return 0; // Никакой сортировки 
    });
    // 3. вызываем перерисовку сортировынных тудушек 
    renderSortedTodo(element, copyTodoList);
}

function sortItemByDescendingTitle(element) {
    let copyTodoList = todoList.slice();
    // 2. сортируем скопированный массив по дате
    copyTodoList.sort(function (a, b) {
        let nameA = a.titleTodo.toLowerCase(),
            nameB = b.titleTodo.toLowerCase();
        if (nameA > nameB) //сортируем строки по убыванию
            return -1;
        if (nameA < nameB)
            return 1;
        return 0; // Никакой сортировки
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