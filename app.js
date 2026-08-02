const getItem = document.querySelector("#input");
const getList = document.querySelector(".main");
const priority = document.querySelector('select[name="priority"]');
const totalTask = document.getElementById("total")
const pendingTask = document.getElementById("pending")
const completedTask = document.getElementById("completed")
const highTask = document.getElementById("high")

let tasks = [];


const addItem=()=> {

  
    const taskText = getItem.value.trim();

    if (taskText === "") {
    
    }

  
    const newTask = {
        id: Date.now(),
        text: taskText,
        priority: priority.value,
        completed: false
    };


    tasks.push(newTask);
    getItem.value = "";

    renderTasks();
}

const renderTasks=()=> {

    getList.innerHTML = tasks.map((task) => {

        return `
            <ul class="list-group m-2">
               <li class="list-group-item text-light border rounded-3 p-3 
    ${task.completed ? "bg-success" : "bg-dark"}">

    <div class="d-flex flex-column flex-sm-row 
                justify-content-between 
                align-items-start 
                align-items-sm-center 
                gap-3">

        <div class="d-flex align-items-center gap-2">

            <input
                type="checkbox"
                class="form-check-input"
                ${task.completed ? "checked" : ""}
                onchange="toggleTask(${task.id})"
            >

            <span>
                ${task.text}
            </span>

        </div>

        <span class="badge ${getPriorityColor(task.priority)}">
            ${task.priority.toUpperCase()}
        </span>

    </div>

</li>
            </ul>
        `;
    }).join("");
}



const toggleTask=(id)=> {

    const task = tasks.find(task => task.id === id);

    if (!task) {
        return;
    }

    task.completed = !task.completed;

    renderTasks();
}



const getPriorityColor=(priority)=> {

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
}

const status=()=>{
    
}