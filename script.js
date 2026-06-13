const inputValue = document.getElementById("input");

// Add task on Enter key press
inputValue.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

function addTask() {
    if (inputValue.value === "") {
        alert("Please enter a task.");
        return;
    } else {
        const newLi = document.createElement("li");
        const taskContainer = document.getElementById("taskContainer");
        taskContainer.appendChild(newLi);
        const addValue = document.getElementById("input").value;
        newLi.innerText = addValue;
        document.getElementById("input").value = "";
        document.getElementById("input").focus();
        deleteTask(newLi);
        saveTask();
    }
}
  
function deleteTask(newLi) {
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    newLi.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", function() {
        newLi.remove();
        saveTask();
    });
}

// Save tasks to localStorage
function saveTask() {
    const taskContainer = document.getElementById("taskContainer");
    const tasks = [];
    taskContainer.querySelectorAll("li").forEach(li => {
        const taskText = li.innerText.replace("Delete", "").trim();
        if (taskText) {
            tasks.push(taskText);
        }
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load tasks from localStorage on page load
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const taskContainer = document.getElementById("taskContainer");
    tasks.forEach(task => {
        const newLi = document.createElement("li");
        taskContainer.appendChild(newLi);
        newLi.innerText = task;
        deleteTask(newLi);
    });
}

// Load tasks when page loads
window.addEventListener("DOMContentLoaded", loadTasks);