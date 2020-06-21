// как будет работать сортировка
function sortList(element) {
    console.log(element);
    // 0 Клонируем узел todo-fields
    let newElement = element.cloneNode();

    // 1. копируем массив объектов todoList
    let todoOnPage = todoList.slice();
    // 2. сортируем скопированный массив по дате
    todoOnPage.sort(function (a, b) {
        let dateA = new Date(a.dateTodo),
            dateB = new Date(b.dateTodo);
        return dateA - dateB; //сортировка по возрастающей дате
    });

    // 3. вызываем функцию создания элемента Todo 
    for (const key in todoOnPage) {
        if (todoOnPage.hasOwnProperty(key)) {
            const element = todoOnPage[key];
            console.log(element);
            newElement.appendChild(createTodoItem(element));
        }
    }
    // 4. Заменяем элементы из todo-fields из п.3
    element.parentNode.replaceChild(newElement, element);
}

// как будет работать сортировка

/*
function sortList(ul) {
    console.log(ul);
    let new_ul = ul.cloneNode();

    // Add all lis to an array
    let lis = [];
    for (let i = ul.childNodes.length; i--;) {
        if (ul.childNodes[i].nodeName === 'LI')
            lis.push(ul.childNodes[i]);
    }

    // Sort the lis in descending order
    lis.sort(function (a, b) {
        let valueA = a.childNodes[0].data;
        let valueB = b.childNodes[0].data;
        let dateA = new Date(valueA),
            dateB = new Date(valueB);
        return dateA - dateB;
        //    return parseInt(b.childNodes[0].data , 10) - 
        //           parseInt(a.childNodes[0].data , 10);
    });

    // Add them into the ul in order
    for (let i = 0; i < lis.length; i++)
        new_ul.appendChild(lis[i]);
    ul.parentNode.replaceChild(new_ul, ul);
}*/