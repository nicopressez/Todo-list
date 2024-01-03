import {
  Listeners,
  addProjectInterface,
  addTaskInterface,
  findProject,
  findTask,
} from "./ui";

import {
  loadDataFromLocalStorage,
  loadProjectsFromStorage,
  saveDataToLocalStorage,
} from "./storagehandler";

Listeners();

export const projectList = [];

loadDataFromLocalStorage();
loadProjectsFromStorage();

export class Tasks {
  constructor(project, title, description, dueDate) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    project.tasks.push(this);
  }
}

export function addTask(form) {
  const currentProject = findProject(form);
  new Tasks(
    currentProject,
    form.newTaskTitle.value,
    form.newTaskDesc.value,
    form.newTaskDate.value,
  );
  addTaskInterface(currentProject, form);
  saveDataToLocalStorage();
}

export function editTask(project, editButton, newTitle, newDesc, newDueDate) {
  const currentTask = findTask(project, editButton);
  currentTask.title = newTitle;
  currentTask.description = newDesc;
  currentTask.dueDate = newDueDate;
  saveDataToLocalStorage();
}

export function removeTask(project, event) {
  const currentTask = findTask(project, event);
  const taskIndex = project.tasks.findIndex(
    (element) => element == currentTask,
  );
  project.tasks.splice(taskIndex, 1);
  saveDataToLocalStorage();
}

export class Projects {
  constructor(name) {
    this.name = name;
    this.tasks = [];
    projectList.push(this);
    addProjectInterface(this.name);
  }
}

export function createProject(form) {
  new Projects(form.projectName.value);
  saveDataToLocalStorage();
}

export function editProject(editButton, newName) {
  const currentProject = findProject(editButton);
  currentProject.name = newName;
  saveDataToLocalStorage();
}

export function removeProject(event) {
  const currentProject = findProject(event.target);
  const currentIndex = projectList.findIndex(
    (project) => project == currentProject,
  );
  projectList.splice(currentIndex, 1);
  saveDataToLocalStorage();
}
