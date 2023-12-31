import { Listeners, addProjectUI } from "./UI";

Listeners();

class Todos{
    constructor(project, title,description,dueDate,priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;

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