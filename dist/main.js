(()=>{"use strict";var e={d:(t,n)=>{for(var a in n)e.o(n,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:n[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e){e.querySelectorAll("input").forEach((e=>{"submit"!==e.type&&(e.value="")}))}e.d({},{pj:()=>c,gI:()=>d,d9:()=>n}),document.querySelector(".newProject").addEventListener("submit",(function(e){e.preventDefault(),new c(this.projectName.value),t(this)}));const n=[];class a{constructor(e,t,n,a){this.title=t,this.description=n,this.dueDate=a,e.tasks.push(this)}}function d(e){const t=function(e){const t=e.parentNode.querySelector("h3").textContent;return n.find((e=>e.name==t))}(e),d=new a(t,e.newTaskTitle.value,e.newTaskDesc.value,e.newTaskDate.value);!function(e,t){const n=e.tasks[e.tasks.length-1],a=document.createElement("div"),d=document.createElement("h3"),c=document.createElement("p"),o=document.createElement("p");d.textContent=n.title,c.textContent=n.description,o.textContent=n.dueDate,t.parentNode.appendChild(a),a.appendChild(d),a.appendChild(c),a.appendChild(o)}(t,e),console.log(d)}class c{constructor(e){this.name=e,this.tasks=[],n.push(this),function(e){const n=document.querySelector("body"),a=document.createElement("div"),c=document.createElement("h3"),o=document.createElement("button");o.textContent="Add task",o.classList.add("addTaskBtn"),a.appendChild(c),a.appendChild(o),o.addEventListener("click",(e=>function(e){const n=document.createElement("form"),a=document.createElement("input"),c=document.createElement("input"),o=document.createElement("input"),s=document.createElement("input");a.type="text",a.name="newTaskTitle",c.type="text",c.name="newTaskDesc",o.type="date",o.name="newTaskDate",s.type="submit",s.name="confirmNewTask",s.classList.add("confirmNewTask"),n.addEventListener("submit",(function(e){e.preventDefault(),d(this),t(this)})),e.target.parentNode.appendChild(n),n.appendChild(a),n.appendChild(c),n.appendChild(o),n.appendChild(s)}(e))),c.textContent=e,n.appendChild(a),a.appendChild(o)}(this.name)}}})();