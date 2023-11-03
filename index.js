let todoList = [];
displayItems();

function addTodo() {
    let inputElement = document.querySelector("#todo-input");
    let dateElement = document.querySelector("#todo-date");
    let todoItem = inputElement.value;
    let todoDate = dateElement.value;
    todoList.push({item: todoItem, dueDate: todoDate});
    inputElement.value = '';
    displayItems();
}

function displayItems() {
    let containerElement = document.querySelector(".todo-container");
    let newHtml = '';
    for (let i = 0; i < todoList.length; i++) {
        let todoItem = todoList[i].item;
        let dueDate = todoList[i].dueDate;
        newHtml += `
        <span>${todoList[i]}</span>
        <button 
                onClick="todoList.splice(${i}, 1);
                 displayItems();">Delete
        </button>
    `;
    }
    containerElement.innerHTML = newHtml;
}