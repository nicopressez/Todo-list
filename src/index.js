import { Listeners, addProjectInterface, addTaskInterface, findProject } from "./UI";

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
    const test = new Tasks(currentProject, form.newTaskTitle.value, form.newTaskDesc.value, form.newTaskDate.value);
    addTaskInterface(currentProject,form)
    console.log(test);
}

export class Projects{
    constructor(name){
        this.name = name;
        this.tasks = [];
        projectList.push(this);
        addProjectInterface(this.name);
    }
}