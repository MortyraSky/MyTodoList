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
let employees = todoList.slice();
console.log("not sorted array");
console.log(employees);
let dateA = new Date(employees[0].dateTodo);
console.log(dateA);
employees.sort(function (a, b) {
    let dateA = new Date(a.dateTodo),
        dateB = new Date(b.dateTodo);
    return dateA - dateB; //сортировка по возрастающей дате
});
console.log("sorted array by date");
console.log(employees);