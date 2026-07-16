function addTask() {

    let input = document.querySelector(".task-input input");
    let taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let taskContainer = document.getElementById("taskContainer");

    let taskBox = document.createElement("div");
    taskBox.classList.add("task-box");

    taskBox.innerHTML = `
        <input type="checkbox" class="task-check">
        <input type="text" value="${taskText}" readonly>
        <button class="taskbtn">Delete</button>
    `;

    // Delete Task
    let deleteBtn = taskBox.querySelector(".taskbtn");
    deleteBtn.addEventListener("click", function () {
        taskBox.remove();
    });

    
    let checkbox = taskBox.querySelector(".task-check");
    checkbox.addEventListener("change", function () {

        let allCheckboxes = document.querySelectorAll(".task-check");

        allCheckboxes.forEach(function (cb) {
            if (cb !== checkbox) {
                cb.checked = false;
            }
        });

    });

   
    taskContainer.prepend(taskBox);

    
    input.value = "";
}