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

export function addProjectUI(name){
    const body = document.querySelector("body");

    const project = document.createElement("p")
    project.textContent = name;

    body.appendChild(project);
}