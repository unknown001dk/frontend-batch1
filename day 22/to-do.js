const taskInput = document.querySelector("#taskInput");
const addTaskBtn = document.querySelector("#addTaskButton");
const taskList = document.querySelector("#taskList");

addTaskBtn.addEventListener("click", function () {
  const task = taskInput.value.trim();

  if (task === "") {
    alert("Please enter a task.");
  }

  console.log("Task added: ", task);
  const li = document.createElement("li");
  li.textContent = task;
  alert("Task added: " + task);

  li.addEventListener("click", function (task) {
    // console.log("Task clicked: ", task);
    alert("Task removed: " + task.target.textContent);
    taskList.removeChild(li);
  })

  taskList.appendChild(li);
  taskInput.value = "";
});
