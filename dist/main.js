(()=>{"use strict";var e={d:(t,n)=>{for(var a in n)e.o(n,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:n[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e){e.querySelectorAll("input").forEach((e=>{"submit"!==e.type&&(e.value="")}))}e.d({},{pj:()=>c,gI:()=>s,d9:()=>n}),document.querySelector(".newProject").addEventListener("submit",(function(e){e.preventDefault(),new c(this.projectName.value),t(this)}));const n=[];class a{constructor(e,t,a,s){this.title=t,this.description=a,this.dueDate=s,e.tasks.push(this),console.log(n[0])}}function s(e){const t=new a(function(e){const t=e.parentNode.querySelector("h3").textContent;return n.find((e=>e.name==t))}(e),e.newTaskTitle.value,e.newTaskDesc.value,e.newTaskDate.value);console.log(t)}class c{constructor(e){this.name=e,this.tasks=[],n.push(this),function(e){const n=document.querySelector("body"),a=document.createElement("div"),c=document.createElement("h3"),o=document.createElement("button");o.textContent="Add task",o.classList.add("addTaskBtn"),a.appendChild(c),a.appendChild(o),o.addEventListener("click",(e=>function(e){const n=document.createElement("form"),a=document.createElement("input"),c=document.createElement("input"),o=document.createElement("input"),i=document.createElement("input");a.type="text",a.name="newTaskTitle",c.type="text",c.name="newTaskDesc",o.type="date",o.name="newTaskDate",i.type="submit",i.name="confirmNewTask",i.classList.add("confirmNewTask"),n.addEventListener("submit",(function(e){e.preventDefault(),s(this),t(this)})),e.target.parentNode.appendChild(n),n.appendChild(a),n.appendChild(c),n.appendChild(o),n.appendChild(i)}(e))),c.textContent=e,n.appendChild(a),a.appendChild(o)}(this.name)}}})();