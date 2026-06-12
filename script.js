const inputValue = document.getElementById("input");

function addTask() {
    if (inputValue.value === "") {
        alert("Please enter a task.");
        return;
    }else {
        const newLi = document.createElement("li");
        const taskContainer = document.getElementById("taskContainer");
        taskContainer.appendChild(newLi);
        const addValue = document.getElementById("input").value;
        newLi.innerText = addValue;
        document.getElementById("input").value = "";
        deleteTask(newLi);
    }
}
  
function deleteTask(newLi) {
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    newLi.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", function() {
        newLi.remove();
    });
}