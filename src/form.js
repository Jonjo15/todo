function createForm() {
    const form = document.createElement("form");
    form.appendChild(createHeader());
    formAppend(form);
    form.appendChild(createButton());

    return form;
}

function createButton() {
    const submit = document.createElement("button");
    submit.textContent = "Submit";
    submit.id = "submit";
    submit.addEventListener("click", (e) => {
        //submit inputs to create a todo object
    });
    return submit
}

function createHeader() {
    const h2 = document.createElement("h2");
    h2.textContent = "New Task";
    return h2
}
function createInput() {
    let inputs = [];
    let selects = createSelect();
    const inputTitle = document.createElement("input");
    inputs.push(inputTitle);
    const inputDescription = document.createElement("input");
    inputs.push(inputDescription);
    inputs.push(selects.paraPriority);
    inputs.push(selects.selectPriority);
    inputTitle.type = "text";
    inputTitle.placeholder = "Title";
    inputDescription.type = "text";
    inputDescription.placeholder = "Description";

    return inputs
}
function createSelect() {
    const paraPriority = document.createElement("p");
    paraPriority.textContent = "Priority: ";
    const selectPriority = document.createElement("select");
    const optionLow = document.createElement("option");
    optionLow.textContent = "Low";
    optionLow.value = "Low";
    const optionMedium = document.createElement("option");
    optionMedium.textContent = "Medium";
    optionMedium.value = "Medium";
    const optionHigh = document.createElement("option");
    optionHigh.textContent = "High";
    optionHigh.value = "High";
    selectPriority.appendChild(optionHigh);
    selectPriority.appendChild(optionMedium);
    selectPriority.appendChild(optionLow);
    return { paraPriority, selectPriority}
}

function formAppend(parent) {
    let inputs = createInput();
    inputs.forEach((element) => {
        parent.appendChild(element);
    })
}
export { createForm }