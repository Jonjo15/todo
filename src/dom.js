const cacheDom = (() => {
    let addTodoButton = document.querySelector("#addTodo");
    const titleInput = document.querySelector(".title");
    const descriptionInput = document.querySelector(".description");
    const priority = document.querySelector(".priority");
    const submitButton = document.querySelector("#submit")
    return { addTodoButton, titleInput, descriptionInput, priority, submitButton }
})();

export {cacheDom}