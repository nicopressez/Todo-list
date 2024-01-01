import { Projects, Tasks, addTask, projectList, createProject, removeTask, removeProject, editProject } from ".";

export function Listeners(){
document.querySelector('.newProject').addEventListener('submit', function(event){
    event.preventDefault();
    createProject(this)
    resetInputs(this);
})
}


export function addProjectInterface(projectName){
    const body = document.querySelector("body");
    const project = document.createElement("div");
    const projectTitle = document.createElement("h3");
    const projectRemoveBtn = document.createElement("button");
    const addTaskBtn = document.createElement("button");
    const editProjectBtn = document.createElement("button");

    addTaskBtn.classList.add('addTaskBtn')

    addTaskBtn.textContent = "Add task";
    projectRemoveBtn.textContent = "Remove Project";
    projectTitle.textContent = projectName;
    editProjectBtn.textContent = "Edit";

    addTaskBtn.addEventListener('click', (event) => showTaskForm(event));

    projectRemoveBtn.addEventListener('click', (event) => {
        body.removeChild(project);
        removeProject(event);
    });

    editProjectBtn.addEventListener('click', (editButton) => {
        const editForm = document.createElement("form");
        const editInput = document.createElement("input");
        const editConfirmBtn = document.createElement("input");

        editInput.value = projectTitle.textContent;
        editInput.type = "text";

        editConfirmBtn.type = "submit";

        editForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const newName = editInput.value;
            editProject(editProjectBtn, newName);
            projectTitle.textContent = newName;
        })

        editButton.target.parentNode.appendChild(editForm);
        editForm.appendChild(editInput);
        editForm.appendChild(editConfirmBtn);
    })

    body.appendChild(project);
    project.appendChild(projectTitle);
    project.appendChild(addTaskBtn);
    project.appendChild(editProjectBtn);
    project.appendChild(projectRemoveBtn);
}

export function findProject(form){
    const projectDiv = form.parentNode;
    const projectTitle = projectDiv.querySelector("h3");
    const projectName = projectTitle.textContent;
    const thisProject = projectList.find ((project) => project.name == projectName);
    return thisProject;
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

    addTaskConfirm.classList.add("confirmNewTask");
    addTaskForm.addEventListener('submit', function(event){
        event.preventDefault();
        addTask(this);
        resetInputs(this)})

    const clickedButton = event.target;
    const upperDiv = clickedButton.parentNode;
    upperDiv.appendChild(addTaskForm);

    addTaskForm.appendChild(addTaskTitle);
    addTaskForm.appendChild(addTaskDesc);
    addTaskForm.appendChild(addTaskDate);
    addTaskForm.appendChild(addTaskConfirm);
}

export function addTaskInterface(project,form)
    {
        const taskInfo = project.tasks[project.tasks.length - 1];

        const taskDiv = document.createElement("div");
        const taskTitle = document.createElement("h3");
        const taskDesc = document.createElement("p");
        const taskDueDate = document.createElement("p");
        const removeTaskBtn = document.createElement("button");

        taskTitle.textContent = taskInfo.title;
        taskDesc.textContent = taskInfo.description;
        taskDueDate.textContent = taskInfo.dueDate;
        removeTaskBtn.textContent = "Remove";

        removeTaskBtn.addEventListener('click', (event) => {
            upperDiv.removeChild(taskDiv);
            removeTask(project,event)
        });

        const upperDiv = form.parentNode;
        upperDiv.appendChild(taskDiv);
        taskDiv.appendChild(taskTitle);
        taskDiv.appendChild(taskDesc);
        taskDiv.appendChild(taskDueDate);
        taskDiv.appendChild(removeTaskBtn);
    }


    export function findTask(project,event)
    {
        const removeButton = event.target;
        const taskDiv = removeButton.parentNode;
        const taskTitle = taskDiv.querySelector("h3");
        const taskName = taskTitle.textContent;
        const currentTask = project.tasks.find(task => task.title === taskName );
        return currentTask;
    }

    function resetInputs(form){
      const inputs =  form.querySelectorAll("input");

      inputs.forEach(input => {
        if (input.type !== 'submit')
        {
            input.value = "";
        }
      });
    }