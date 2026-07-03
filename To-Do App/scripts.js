const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const errorMsg = document.getElementById("errorMsg");
const clearBtn = document.getElementById("clearBtn");
const remainingCount = document.getElementById("remainingCount");
const allDoneMsg = document.getElementById("allDoneMsg");
const colorCircles = document.querySelectorAll(".color-circle");

document.addEventListener("DOMContentLoaded", () => {
  loadTasks();
  loadBackgroundColor();
  updateDashboardUI();
});


addBtn.addEventListener("click", handleAddTask);
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") handleAddTask();
});

clearBtn.addEventListener("click", () => {
  taskList.innerHTML = "";
  saveTasksToStorage();
  updateDashboardUI();
});


colorCircles.forEach(circle => {
  circle.addEventListener("click", () => {
    // Remove active class from previous circle, add to this one
    document.querySelector(".color-circle.active")?.classList.remove("active");
    circle.classList.add("active");

    const chosenColor = circle.dataset.color;
    document.body.style.backgroundColor = chosenColor;

    localStorage.setItem("todoBgColor", chosenColor);
  });
});


function handleAddTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    errorMsg.textContent = "⚠️ Please type a task first!";
    return;
  }

  
  errorMsg.textContent = "";

  createTaskElement(taskText, false);
  saveTasksToStorage();
  updateDashboardUI();
  taskInput.value = ""; 
}


function createTaskElement(text, isCompleted) {
  const li = document.createElement("li");
  li.className = "task-item";
  if (isCompleted) li.classList.add("done");

  
  const span = document.createElement("span");
  span.className = "task-text";
  span.textContent = text;


  const doneBtn = document.createElement("button");
  doneBtn.className = "done-btn";
  doneBtn.textContent = "✓ Done";
  doneBtn.addEventListener("click", () => {
    li.classList.toggle("done");
    saveTasksToStorage();
    updateDashboardUI();
  });

  
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", () => {
    li.remove();
    saveTasksToStorage();
    updateDashboardUI();
  });

  
  li.appendChild(span);
  li.appendChild(doneBtn);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);
}


function updateDashboardUI() {
  const totalItems = document.querySelectorAll("#taskList .task-item").length;
  const completedItems = document.querySelectorAll("#taskList .task-item.done").length;
  const itemsLeft = totalItems - completedItems;


  remainingCount.textContent = itemsLeft;

  
  if (totalItems > 0 && itemsLeft === 0) {
    allDoneMsg.classList.add("visible");
  } else {
    allDoneMsg.classList.remove("visible");
  }
}

function saveTasksToStorage() {
  const tasks = [];
  document.querySelectorAll("#taskList .task-item").forEach(li => {
    tasks.push({
      text: li.querySelector(".task-text").textContent,
      completed: li.classList.contains("done")
    });
  });
  localStorage.setItem("myTodoList", JSON.stringify(tasks));
}

function loadTasks() {
  const savedTasks = JSON.parse(localStorage.getItem("myTodoList")) || [];
  savedTasks.forEach(task => {
    createTaskElement(task.text, task.completed);
  })

function loadBackgroundColor() {
  const savedColor = localStorage.getItem("todoBgColor");
  if (savedColor) {
    document.body.style.backgroundColor = savedColor;
    
   
    document.querySelector(".color-circle.active")?.classList.remove("active");
    const matchingCircle = Array.from(colorCircles).find(c => c.dataset.color === savedColor);
    if (matchingCircle) matchingCircle.classList.add("active");
  }
}}
