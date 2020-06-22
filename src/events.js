import { createForm } from './form'
import { cacheDom } from './dom'
function addEvents() {
    const addTodo = document.querySelector("#addTodo");
    const project = document.querySelector("#project");
    addTodo.addEventListener("click", (e) => {
        console.log("CLICK");
        project.appendChild(createForm());
    });
}
//console.log(cacheDom.priority.value);
export {addEvents}