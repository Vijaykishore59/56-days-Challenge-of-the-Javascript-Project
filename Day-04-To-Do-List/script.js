const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

const totalTasks = document.getElementById("totalTasks");
const completed = document.getElementById("completed");
const pending = document.getElementById("pending");

function updateCounters() {
    const tasks = document.querySelectorAll(".task-item");
    const completedTasks = document.querySelectorAll(".task-item input:checked");

    totalTasks.innerText = tasks.length;
    completed.innerText = completedTasks.length;
    pending.innerText = tasks.length - completedTasks.length;
}

function addTask() {

    if (taskInput.value.trim().length === 0) {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");
    li.classList.add("task-item");

    const div = document.createElement("div");
    div.classList.add("taskLeft");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const span = document.createElement("span");
    span.innerText = taskInput.value;

    const button = document.createElement("button");
    button.classList.add("deleteBtn");
    button.innerText = "🗑️";

    div.appendChild(checkbox);
    div.appendChild(span);

    li.appendChild(div);
    li.appendChild(button);

    taskList.appendChild(li);

    taskInput.value = "";

    updateCounters();

    checkbox.addEventListener("change", function () {

        if (checkbox.checked) {
            span.style.textDecoration = "line-through";
            span.style.color = "gray";
        } else {
            span.style.textDecoration = "none";
            span.style.color = "black";
        }

        updateCounters();
    });

    button.addEventListener("click", function () {
        li.remove();
        updateCounters();
    });

}

addBtn.addEventListener("click", addTask);