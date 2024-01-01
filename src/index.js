import { Listeners, addProjectUI } from "./UI";

Listeners();

class Tasks{
    constructor(project, title,description,dueDate){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;

        project.push(this);
    }
}

export class Projects{
    constructor(name){
        this.name = name;
        this.tasks = [];
        addProjectUI(this.name);
    }
}