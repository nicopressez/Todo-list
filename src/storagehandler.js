import { findProject, showTaskForm, projectsList } from "./ui";
import {
  projectList,
  removeProject,
  editProject,
  removeTask,
  editTask,
} from "./index";

export function saveDataToLocalStorage() {
  localStorage.setItem("projectlist", JSON.stringify(projectList));
  console.log(localStorage.getItem("projectlist"));
}

export function loadDataFromLocalStorage() {
  const storedProjectList = localStorage.getItem("projectlist");
  if (storedProjectList) {
    projectList.splice(0, projectList.length, ...JSON.parse(storedProjectList));
  }
}

export function loadProjectsFromStorage() {
  projectList.forEach((project) => loadProjectsInterface(project.name));
}

export function loadProjectsInterface(projectName) {
  const projectWhole = document.createElement("div");
  const project = document.createElement("div");
  const projectTitle = document.createElement("h3");
  const projectBtnContainer = document.createElement("div");
  const projectRemoveBtn = document.createElement("button");
  const addTaskBtn = document.createElement("button");
  const editProjectBtn = document.createElement("button");

  projectWhole.classList.add("entireProject");
  project.classList.add("singleProject");
  addTaskBtn.classList.add("addTaskBtn");
  projectBtnContainer.classList.add("btnContainer");

  addTaskBtn.textContent = "Add task";
  projectRemoveBtn.textContent = "Remove";
  projectTitle.textContent = projectName;
  editProjectBtn.textContent = "Edit";

  addTaskBtn.addEventListener("click", (event) => {
    if (!project.querySelector("form")) {
      showTaskForm(event);
    }
  });

  projectRemoveBtn.addEventListener("click", (event) => {
    projectsList.removeChild(projectWhole);
    removeProject(event);
  });

  editProjectBtn.addEventListener("click", () => {
    if (!project.querySelector("form")) {
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
      });

      project.appendChild(editForm);
      editForm.appendChild(editInput);
      editForm.appendChild(editConfirmBtn);
    }
  });

  projectsList.appendChild(projectWhole);
  projectWhole.appendChild(project);
  project.appendChild(projectTitle);
  project.appendChild(projectBtnContainer);
  projectBtnContainer.appendChild(addTaskBtn);
  projectBtnContainer.appendChild(editProjectBtn);
  projectBtnContainer.appendChild(projectRemoveBtn);

  const currentProject = findProject(editProjectBtn);
  currentProject.tasks.forEach((task) => {
    loadTaskInterface(currentProject, task, projectBtnContainer);
  });
}

export function loadTaskInterface(project, taskInfo, form) {
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

  removeTaskBtn.addEventListener("click", (event) => {
    upperDiv.removeChild(taskDiv);
    removeTask(project, event);
  });

  editTaskBtn.addEventListener("click", (editButton) => {
    if (!editTaskBtn.parentNode.querySelector("form")) {
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

      editTaskForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const newTitle = editTaskTitle.value;
        const newDesc = editTaskDescription.value;
        const newDueDate = editTaskDueDate.value;

        editTask(project, editButton, newTitle, newDesc, newDueDate);

        taskTitle.textContent = newTitle;
        taskDesc.textContent = newDesc;
        taskDueDate.textContent = newDueDate;

        editTaskBtn.parentNode.removeChild(editTaskForm);
      });

      editButton.target.parentNode.appendChild(editTaskForm);
      editTaskForm.appendChild(editTaskTitle);
      editTaskForm.appendChild(editTaskDescription);
      editTaskForm.appendChild(editTaskDueDate);
      editTaskForm.appendChild(editTaskConfirm);
    }
  });

  const upperDiv = form.parentNode.parentNode;
  upperDiv.appendChild(taskDiv);
  taskDiv.appendChild(taskTitle);
  taskDiv.appendChild(taskDesc);
  taskDiv.appendChild(taskDueDate);
  taskDiv.appendChild(editTaskBtn);
  taskDiv.appendChild(removeTaskBtn);
}
