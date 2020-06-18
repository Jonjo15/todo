function addEvents() {
    const addTodo = document.querySelector("#addTodo");
    addTodo.addEventListener("click", (e) => {
        console.log("CLICK");
    });
}

export {addEvents}