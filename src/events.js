import { createForm } from './form'
import { cacheDom } from './dom'
const form = createForm();
function addEvents() {
    const addTodo = document.querySelector("#addTodo");
    const project = document.querySelector("#project");
    addTodo.addEventListener("click", (e) => {
        console.log("CLICK");
        project.appendChild(form);
        console.log(cacheDom.titleInput);
    });
}
//console.log(cacheDom.priority.value);
export {addEvents}