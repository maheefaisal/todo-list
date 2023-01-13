const addButton = document.getElementById("add-button");
const taskInput = document.getElementById("new-task");
const taskList = document.getElementById("task-list");

addButton.addEventListener("click", addTask);

function addTask(event) {
  event.preventDefault();
  if (taskInput.value === "") return;
  const task = taskInput.value;
  const li = document.createElement("li");
  li.innerHTML = task;
  taskList.appendChild(li);
  taskInput.value = "";
}
taskList.addEventListener("click", markCompleted);

function markCompleted(event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("completed");
  }
}
