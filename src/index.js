import { Listeners, addProjectInterface, findProject } from "./UI";

Listeners();

export const projectList = [];

export class Tasks{
    constructor(project, title,description,dueDate){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        project.tasks.push(this);
        console.log(projectList[0])
    }
}

export function addTask (form){
    const test = new Tasks(findProject(form), form.newTaskTitle.value, form.newTaskDesc.value, form.newTaskDate.value);
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