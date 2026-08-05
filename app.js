
const getItem = document.querySelector("#input");
const getList = document.querySelector(".main");
const priority = document.querySelector('select[name="priority"]');

const totalTask = document.getElementById("total");
const pendingTask = document.getElementById("pending");
const completedTask = document.getElementById("completed");
const highTask = document.getElementById("high");
const log = document.querySelector("#log")
const searchField = document.getElementById("searchField")
function getLoggedInUser() {
    return JSON.parse(
        localStorage.getItem("loggedInUser")
    );
}

const currentUser = getLoggedInUser();

if (!currentUser) {

    
    document.querySelector(".account").innerHTML = `
        <a
            href="login.html"
            class="btn btn-outline-danger"
        >
            Login
        </a>
    `;

} else {


    document.getElementById("User").innerHTML = `
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 16 16"
        >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
            <path d="M14 14s-1-1-1-1-1-4-5-4-5 4-5 4-1 1-1 1h12z"/>
        </svg>

        ${currentUser.name}
    `;

   log.innerHTML = `
    Logout    
    `
searchField.innerHTML+=`
<div class="input-group mb-3 px-2">
  <input type="search" oninput="Search()" id="search" class="form-control" placeholder="Search a task..." >
`
}
const Search = () => {

    const search = document
        .getElementById("search")
        .value
        .trim()
        .toLowerCase();

    if (search === "") {
        renderTasks();
        return;
    }

    const searched = tasks.filter(task =>
        task.text.toLowerCase().includes(search)
    );
        
    getList.innerHTML= searched.map(task => `
      <ul class="list-group m-2">

                <li class="list-group-item text-light border rounded-3 p-3
                    ${task.completed ? "bg-success" : "bg-dark"}">

                    <div class="d-flex flex-column flex-md-row
                                justify-content-between
                                align-items-start
                                align-items-md-center
                                gap-3">

                        
                        <div class="d-flex align-items-center gap-2">

                            <input
                                type="checkbox"
                                class="form-check-input"
                                ${task.completed ? "checked" : ""}
                                onchange="toggleTask(${task.id})"
                            >

                            <span class="${task.completed ? "text-decoration-line-through" : ""}" id="taskItem">
                                ${task.text}
                            </span>

                        </div>


                        
                        <div class="d-flex align-items-center gap-2">

                            <span class="badge ${getPriorityColor(task.priority)}">
                                ${task.priority.toUpperCase()}
                            </span>


                           
                            <button
                                class="btn btn-sm btn-outline-light"
                                onclick="editTask(${task.id})"
                                title="Edit Task"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10A.5.5 0 0 1 5.5 14H2a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .146-.354l10-10zM11.207 2.5 13.5 4.793 14.293 4 12 1.707l-.793.793zm1.586 3L10.5 3.207 3 10.707V13h2.293l7.5-7.5z"/>
                                </svg>
                            </button>


                           
                            <button
                                class="btn btn-sm btn-outline-danger"
                                onclick="deleteTask(${task.id})"
                                title="Delete Task"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0A.5.5 0 0 1 8.5 6v6a.5.5 0 0 1-1 0V6A.5.5 0 0 1 8 5.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L10.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                </svg>
                            </button>

                        </div>

                    </div>

                </li>

            </ul>
    `).join("");
};
const TASK_STORAGE_KEY = `tasks_${currentUser.email}`;

let tasks = JSON.parse(
    localStorage.getItem(TASK_STORAGE_KEY)
) || [];

const saveTasks = () => {
    localStorage.setItem(
        TASK_STORAGE_KEY,
        JSON.stringify(tasks)
    );
};

const addItem = () => {

    const taskText = getItem.value.trim();

    if (taskText === "") {

        Swal.fire({
            icon: "error",
            text: "Please fill the fields",
        });

        return;
    }

    const newTask = {
        id: Date.now(),
        text: taskText,
        priority: priority.value,
        completed: false
    };

    tasks.push(newTask);


    saveTasks();

    getItem.value = "";

    renderTasks();
};



function renderTasks() {
    
    getList.innerHTML += tasks.map((task) => {
        return `
         <ul class="list-group mb-2">

                <li class="list-group-item text-light border rounded-3 p-3
                    ${task.completed ? "bg-success" : "bg-dark"}">

                    <div class="d-flex flex-column flex-md-row
                                justify-content-between
                                align-items-start
                                align-items-md-center
                                gap-3">

                        
                        <div class="d-flex align-items-center gap-2">

                            <input
                                type="checkbox"
                                class="form-check-input"
                                ${task.completed ? "checked" : ""}
                                onchange="toggleTask(${task.id})"
                            >

                            <span class="${task.completed ? "text-decoration-line-through" : ""}" id="taskItem">
                                ${task.text}
                            </span>

                        </div>


                        
                        <div class="d-flex align-items-center gap-2">

                            <span class="badge ${getPriorityColor(task.priority)}">
                                ${task.priority.toUpperCase()}
                            </span>


                           
                            <button
                                class="btn btn-sm btn-outline-light"
                                onclick="editTask(${task.id})"
                                title="Edit Task"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10A.5.5 0 0 1 5.5 14H2a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .146-.354l10-10zM11.207 2.5 13.5 4.793 14.293 4 12 1.707l-.793.793zm1.586 3L10.5 3.207 3 10.707V13h2.293l7.5-7.5z"/>
                                </svg>
                            </button>


                           
                            <button
                                class="btn btn-sm btn-outline-danger"
                                onclick="deleteTask(${task.id})"
                                title="Delete Task"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0A.5.5 0 0 1 8.5 6v6a.5.5 0 0 1-1 0V6A.5.5 0 0 1 8 5.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L10.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                </svg>
                            </button>

                        </div>

                    </div>

                </li>

            </ul>
        `;

    }).join("");

    status();
}



function deleteTask(id) {

    const task = tasks.find(task => task.id === id);

    if (!task) {
        return;
    }

    Swal.fire({
        title: "Delete Task?",
        text: "This task will be permanently deleted.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Delete",
        cancelButtonText: "Cancel"
    }).then((result) => {

        if (result.isConfirmed) {

            tasks = tasks.filter(task => task.id !== id);


            saveTasks();

            renderTasks();

            Swal.fire({
                icon: "success",
                title: "Deleted",
                text: "Task deleted successfully.",
                timer: 1200,
                showConfirmButton: false
            });
        }
    });
}



function editTask(id) {

    const task = tasks.find(task => task.id === id);

    if (!task) {
        return;
    }

    Swal.fire({
        title: "Edit Task",
        input: "text",
        inputValue: task.text,
        showCancelButton: true,
        confirmButtonText: "Save",
        cancelButtonText: "Cancel",

        inputValidator: (value) => {

            if (!value.trim()) {
                return "Task cannot be empty!";
            }

        }

    }).then((result) => {

        if (result.isConfirmed) {

            task.text = result.value.trim();


            saveTasks();

            renderTasks();
        }

    });
}



const toggleTask = (id) => {

    const task = tasks.find(task => task.id === id);

    if (!task) {
        return;
    }

    task.completed = !task.completed;


    saveTasks();

    renderTasks();
};



const getPriorityColor = (priority) => {

    switch (priority) {

        case "High":
            return "bg-danger";

        case "Medium":
            return "bg-warning text-dark";

        case "Low":
            return "bg-primary";

        default:
            return "bg-secondary";
    }
};



const status = () => {

    totalTask.innerHTML = tasks.length;

    completedTask.innerHTML = tasks.filter(
        task => task.completed
    ).length;

    pendingTask.innerHTML = tasks.filter(
        task => !task.completed
    ).length;

    highTask.innerHTML = tasks.filter(
        task => task.priority === "High"
    ).length;
};



renderTasks();


function Logout() {

    Swal.fire({

        title: "Logout?",

        text: "You will be logged out.",

        icon: "warning",

        showCancelButton: true,

        confirmButtonText: "Logout",

        cancelButtonText: "Cancel"

    }).then((result) => {

        if (result.isConfirmed) {

            localStorage.removeItem("loggedInUser");

            window.location.href = "login.html";

        }

    });

}
