import { createInput } from './dom'
function addEvents() {
    const addTodo = document.querySelector("#addTodo");
    const project = document.querySelector("#project");
    addTodo.addEventListener("click", (e) => {
        console.log("CLICK");
        project.appendChild(createInput());
    });
}

export {addEvents}