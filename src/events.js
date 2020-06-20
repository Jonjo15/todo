import { createForm } from './form'
function addEvents() {
    const addTodo = document.querySelector("#addTodo");
    const project = document.querySelector("#project");
    addTodo.addEventListener("click", (e) => {
        console.log("CLICK");
        project.appendChild(createForm());
        
    });
}

export {addEvents}