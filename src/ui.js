import { Projects } from ".";

export function Listeners(){
document.querySelector('.newProject').addEventListener('submit', function(event){
    event.preventDefault();
    createProject(this);
})
}

export function createProject(form){
    const Project = new Projects(form.projectName.value);
    console.log(Project);
}

export function addProjectUI(projectName){
    const body = document.querySelector("body");
    const project = document.createElement("div");

    const addTaskBtn = document.createElement("button");
    addTaskBtn.textContent = "Add task";
    addTaskBtn.classList.add('addTaskBtn')

    project.appendChild(addTaskBtn);
    addTaskBtn.addEventListener('click', (event) => showTaskForm(event));

    project.textContent = projectName;

    body.appendChild(project);
    body.appendChild(addTaskBtn);
}

function showTaskForm(event){
    const addTaskForm = document.createElement('form');
    const addTaskTitle = document.createElement('input');
    const addTaskDesc = document.createElement('input');
    const addTaskDate = document.createElement('input');
    const addTaskConfirm = document.createElement('input');

    addTaskTitle.type = "text"; addTaskTitle.name = "newTaskTitle";
    addTaskDesc.type = "text"; addTaskDesc.name = "newTaskDesc";
    addTaskDate.type = "date"; addTaskDate.name = "newTaskDate";
    addTaskConfirm.type = "submit"; addTaskConfirm.name = "confirmNewTask";

    const clickedButton = event.target;
    const upperDiv = clickedButton.parentNode;
    upperDiv.appendChild(addTaskForm);
    upperDiv.appendChild(addTaskTitle);
    upperDiv.appendChild(addTaskDesc);
    upperDiv.appendChild(addTaskDate);
    upperDiv.appendChild(addTaskConfirm);}