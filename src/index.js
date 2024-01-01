import { Listeners, addProjectInterface, addTaskInterface, findProject, findTask } from "./UI";

Listeners();

export const projectList = [];

export class Tasks{
    constructor(project, title,description,dueDate){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        project.tasks.push(this);
    }
}

export function addTask (form){
    const currentProject = findProject(form)
    new Tasks(currentProject, form.newTaskTitle.value, form.newTaskDesc.value, form.newTaskDate.value);
    addTaskInterface(currentProject,form)
}

export function removeTask(project,event)
{
  const currentTask = findTask(project,event);
  const taskIndex = project.tasks.findIndex((element) => element == currentTask );
  project.tasks.splice(taskIndex, 1);
}

export class Projects{
    constructor(name){
        this.name = name;
        this.tasks = [];
        projectList.push(this);
        addProjectInterface(this.name);
    }
}


export function createProject(form){
    new Projects(form.projectName.value);
}

export function editProject(editButton, newName)
{
    const currentProject = findProject(editButton);
    currentProject.name = newName;
}

export function removeProject(event){
    const currentProject = findProject(event.target);
    const currentIndex = projectList.findIndex(project => project == currentProject);
    projectList.splice(currentIndex);
}