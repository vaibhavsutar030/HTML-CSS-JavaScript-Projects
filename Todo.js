let input = document.getElementById("task");
let text = document.querySelector(".text");

function addTask() {
    if (input.value === "") {
        alert("Please enter a task first");
    } else {
        let newTask = document.createElement("li");
        newTask.innerHTML = `${input.value}<i class="fa-solid fa-trash"></i>`;
        text.appendChild(newTask);
        input.value = "";
        newTask.querySelector(".fa-trash").addEventListener("click", removeTask);
    }
}

function removeTask() {
    this.parentNode.remove();
}

function clearAllTasks() {
    text.innerHTML = "";
}