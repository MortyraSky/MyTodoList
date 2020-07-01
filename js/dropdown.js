document.querySelector('.dropbtn').onclick = function () {
    document.getElementById("myDropdown").classList.toggle("show");
};

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};
// сортировка по дате работает, тока надо подумать 
// как отрисовывать элементы сортированыые?
// можно отсортировать todoList внести в локалсторедж и перезагрузить страницу
// но тогда сортировка будет всегда сохраняться. Доп массив с изначальным todoList

document.querySelector('.ascending-date').onclick = function() {
    let ul = document.getElementById('todo-fields');
    sortItemByAscendingDate(ul);
};

document.querySelector('.descending-date').onclick = function() {
    let ul = document.getElementById('todo-fields');
    sortItemByDscendingDate(ul);
};
