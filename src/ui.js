import {editTask, Projects, Tasks, addTask, projectList, createProject, removeTask, removeProject, editProject } from ".";

const projectsSection = document.getElementById("projects");
const body = projectsSection.parentNode
const projectsList = document.getElementById("projectList");

export function Listeners(){
document.querySelector('.newProject').addEventListener('submit', function(event){
    event.preventDefault();
    createProject(this)
    resetInputs(this);
})
}

const projectTab = document.getElementById("projects");

const projectNav = document.getElementById("projectNav");
projectNav.addEventListener('click', () => {
    if (projectTab.classList.contains("active")){projectTab.classList.remove("active")}
    else {projectTab.classList.add("active")
        if (todayTab.classList.contains("active")){todayTab.classList.remove("active")}
        if (thisWeekTab.classList.contains("active")){thisWeekTab.classList.remove("active")}}
} );

const todayNav = document.getElementById("todayNav");
const todayTab = document.getElementById("today");
todayNav.addEventListener('click', () => {
    if (todayTab.classList.contains("active")){todayTab.classList.remove("active")}
    else {todayTab.classList.add("active")
      if (projectTab.classList.contains("active")){projectTab.classList.remove("active")}
      if (thisWeekTab.classList.contains("active")){thisWeekTab.classList.remove("active")}
}})

const thisWeekNav = document.getElementById("thisWeekNav");
const thisWeekTab = document.getElementById("thisWeek");
thisWeekNav.addEventListener('click', () => {
    if (thisWeekTab.classList.contains("active")){thisWeekTab.classList.remove("active")}
    else {thisWeekTab.classList.add("active")
      if (projectTab.classList.contains("active")){projectTab.classList.remove("active")}
      if (todayTab.classList.contains("active")){todayTab.classList.remove("active");
}}})



export function addProjectInterface(projectName){
    const projectWhole = document.createElement("div");
    const project = document.createElement("div");
    const projectTitle = document.createElement("h3");
    const projectBtnContainer = document.createElement("div");
    const projectRemoveBtn = document.createElement("button");
    const addTaskBtn = document.createElement("button");
    const editProjectBtn = document.createElement("button");

    projectWhole.classList.add("entireProject");
    project.classList.add("singleProject");
    addTaskBtn.classList.add('addTaskBtn');
    projectBtnContainer.classList.add("btnContainer");

    addTaskBtn.textContent = "Add task";
    projectRemoveBtn.textContent = "Remove";
    projectTitle.textContent = projectName;
    editProjectBtn.textContent = "Edit";

    addTaskBtn.addEventListener('click', (event)  =>
        {if (!project.querySelector("form")){showTaskForm(event)}
});

    projectRemoveBtn.addEventListener('click', (event) => {
        projectsList.removeChild(projectWhole);
        removeProject(event);
    });

    editProjectBtn.addEventListener('click', (editButton) => {
        if (!project.querySelector("form")){
        const editForm = document.createElement("form");
        const editInput = document.createElement("input");
        const editConfirmBtn = document.createElement("input");

        editForm.classList.add("editForm");

        editInput.value = projectTitle.textContent;
        editInput.type = "text";

        editConfirmBtn.type = "submit";

        editForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const newName = editInput.value;
            editProject(editProjectBtn, newName);
            projectTitle.textContent = newName;

            project.removeChild(editForm);
        })

        project.appendChild(editForm);
        editForm.appendChild(editInput);
        editForm.appendChild(editConfirmBtn);
}})

    projectsList.appendChild(projectWhole);
    projectWhole.appendChild(project);
    project.appendChild(projectTitle);
    project.appendChild(projectBtnContainer)
    projectBtnContainer.appendChild(addTaskBtn);
    projectBtnContainer.appendChild(editProjectBtn);
    projectBtnContainer.appendChild(projectRemoveBtn);
}

export function findProject(form){
    const projectDiv = form.parentNode.parentNode;
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
        resetInputs(this)
        upperDiv.removeChild(addTaskForm);
    })

    const clickedButton = event.target;
    const upperDiv = clickedButton.parentNode.parentNode;
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
        const editTaskBtn = document.createElement("button");

        taskDiv.classList.add("singleTask");
        taskTitle.textContent = taskInfo.title;
        taskDesc.textContent = taskInfo.description;
        taskDueDate.textContent = taskInfo.dueDate;
        removeTaskBtn.textContent = "Remove";
        editTaskBtn.textContent = "Edit";

        removeTaskBtn.addEventListener('click', (event) => {
            upperDiv.removeChild(taskDiv);
            removeTask(project,event)
        });

        editTaskBtn.addEventListener('click', (editButton) => {
            if (!editTaskBtn.parentNode.querySelector("form")){
            const editTaskForm = document.createElement("form");
            const editTaskTitle = document.createElement("input");
            const editTaskDescription = document.createElement("input");
            const editTaskDueDate = document.createElement("input");
            const editTaskConfirm = document.createElement("input");

            editTaskTitle.type = "text";
            editTaskDescription.type = "text";
            editTaskDueDate.type = "date";
            editTaskConfirm.type = "submit";

            editTaskTitle.value = taskTitle.textContent;
            editTaskDescription.value = taskDesc.textContent;
            editTaskDueDate.value = taskDueDate.textContent;

            editTaskForm.addEventListener("submit", (event) =>{
                event.preventDefault();

                const newTitle = editTaskTitle.value;
                const newDesc = editTaskDescription.value;
                const newDueDate = editTaskDueDate.value;

                editTask(project, editButton, newTitle,newDesc,newDueDate);

                taskTitle.textContent = newTitle;
                taskDesc.textContent = newDesc;
                taskDueDate.textContent = newDueDate;

                editTaskBtn.parentNode.removeChild(editTaskForm);
            })

            editButton.target.parentNode.appendChild(editTaskForm);
            editTaskForm.appendChild(editTaskTitle);
            editTaskForm.appendChild(editTaskDescription);
            editTaskForm.appendChild(editTaskDueDate);
            editTaskForm.appendChild(editTaskConfirm);
        }})

        const upperDiv = form.parentNode.parentNode;
        upperDiv.appendChild(taskDiv);
        taskDiv.appendChild(taskTitle);
        taskDiv.appendChild(taskDesc);
        taskDiv.appendChild(taskDueDate);
        taskDiv.appendChild(editTaskBtn);
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