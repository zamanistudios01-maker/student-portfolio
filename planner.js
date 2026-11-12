const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

const tasks = [];

taskForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const text = taskInput.value.trim();

    if (text === "") {
        return;
    }

    tasks.push({ text: text, completed: false });
    taskInput.value = "";

    renderTasks();
});

function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach(function (task, index) {
        const li = document.createElement("li");
        li.className = "task";

        const span = document.createElement("span");
        span.textContent = task.text;

        const doneBtn = document.createElement("button");
        doneBtn.textContent = "Done";

        if (task.completed) {
            li.classList.add("completed");
            doneBtn.textContent = "Undo";
        }

        doneBtn.addEventListener("click", function () {
            task.completed = !task.completed;
            renderTasks();
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete-btn";

        deleteBtn.addEventListener("click", function () {
            tasks.splice(index, 1);
            renderTasks();
        });

        li.appendChild(span);
        li.appendChild(doneBtn);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}
