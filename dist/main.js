(()=>{"use strict";var e={d:(t,n)=>{for(var d in n)e.o(n,d)&&!e.o(t,d)&&Object.defineProperty(t,d,{enumerable:!0,get:n[d]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{gI:()=>i,$L:()=>p,NV:()=>u,eT:()=>s,d9:()=>o,rR:()=>m,F6:()=>l}),document.getElementById("projects");const t=document.getElementById("projectList");function n(e){const t=e.parentNode.parentNode.querySelector("h3").textContent;return o.find((e=>e.name==t))}function d(e,t){const n=t.target.parentNode.querySelector("h3").textContent;return e.tasks.find((e=>e.title===n))}function a(e){e.querySelectorAll("input").forEach((e=>{"submit"!==e.type&&(e.value="")}))}document.querySelector(".newProject").addEventListener("submit",(function(e){e.preventDefault(),p(this),a(this)}));const o=[];class c{constructor(e,t,n,d){this.title=t,this.description=n,this.dueDate=d,e.tasks.push(this)}}function i(e){const t=n(e);new c(t,e.newTaskTitle.value,e.newTaskDesc.value,e.newTaskDate.value),function(e,t){const n=e.tasks[e.tasks.length-1],d=document.createElement("div"),a=document.createElement("h3"),o=document.createElement("p"),c=document.createElement("p"),i=document.createElement("button"),r=document.createElement("button");d.classList.add("singleTask"),a.textContent=n.title,o.textContent=n.description,c.textContent=n.dueDate,i.textContent="Remove",r.textContent="Edit",i.addEventListener("click",(t=>{p.removeChild(d),l(e,t)})),r.addEventListener("click",(t=>{if(!r.parentNode.querySelector("form")){const n=document.createElement("form"),d=document.createElement("input"),i=document.createElement("input"),l=document.createElement("input"),p=document.createElement("input");d.type="text",i.type="text",l.type="date",p.type="submit",d.value=a.textContent,i.value=o.textContent,l.value=c.textContent,n.addEventListener("submit",(p=>{p.preventDefault();const u=d.value,m=i.value,h=l.value;s(e,t,u,m,h),a.textContent=u,o.textContent=m,c.textContent=h,r.parentNode.removeChild(n)})),t.target.parentNode.appendChild(n),n.appendChild(d),n.appendChild(i),n.appendChild(l),n.appendChild(p)}}));const p=t.parentNode.parentNode;p.appendChild(d),d.appendChild(a),d.appendChild(o),d.appendChild(c),d.appendChild(r),d.appendChild(i)}(t,e)}function s(e,t,n,a,o){const c=d(e,t);c.title=n,c.description=a,c.dueDate=o}function l(e,t){const n=d(e,t),a=e.tasks.findIndex((e=>e==n));e.tasks.splice(a,1)}class r{constructor(e){this.name=e,this.tasks=[],o.push(this),function(e){const n=document.createElement("div"),d=document.createElement("div"),o=document.createElement("h3"),c=document.createElement("div"),s=document.createElement("button"),l=document.createElement("button"),r=document.createElement("button");n.classList.add("entireProject"),d.classList.add("singleProject"),l.classList.add("addTaskBtn"),c.classList.add("btnContainer"),l.textContent="Add task",s.textContent="Remove",o.textContent=e,r.textContent="Edit",l.addEventListener("click",(e=>{d.querySelector("form")||function(e){const t=document.createElement("form"),n=document.createElement("input"),d=document.createElement("input"),o=document.createElement("input"),c=document.createElement("input");n.type="text",n.name="newTaskTitle",d.type="text",d.name="newTaskDesc",o.type="date",o.name="newTaskDate",c.type="submit",c.name="confirmNewTask",c.classList.add("confirmNewTask"),t.addEventListener("submit",(function(e){e.preventDefault(),i(this),a(this),s.removeChild(t)}));const s=e.target.parentNode.parentNode;s.appendChild(t),t.appendChild(n),t.appendChild(d),t.appendChild(o),t.appendChild(c)}(e)})),s.addEventListener("click",(e=>{t.removeChild(n),m(e)})),r.addEventListener("click",(e=>{if(!d.querySelector("form")){const e=document.createElement("form"),t=document.createElement("input"),n=document.createElement("input");e.classList.add("editForm"),t.value=o.textContent,t.type="text",n.type="submit",e.addEventListener("submit",(n=>{n.preventDefault();const a=t.value;u(r,a),o.textContent=a,d.removeChild(e)})),d.appendChild(e),e.appendChild(t),e.appendChild(n)}})),t.appendChild(n),n.appendChild(d),d.appendChild(o),d.appendChild(c),c.appendChild(l),c.appendChild(r),c.appendChild(s)}(this.name)}}function p(e){new r(e.projectName.value)}function u(e,t){n(e).name=t}function m(e){const t=n(e.target),d=o.findIndex((e=>e==t));o.splice(d,1)}})();