function createInput() {
    const form = document.createElement("form");
    const h2 = document.createElement("h2");
    const paraPriority = document.createElement("p");
    const submit = document.createElement("button");
    submit.textContent = "Submit";
    submit.id = "submit";
    paraPriority.textContent = "Priority: ";
    h2.textContent = "New Task";
    const inputTitle = document.createElement("input");
    const inputDescription = document.createElement("input");
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
    inputTitle.type = "text";
    inputTitle.placeholder = "Title";
    inputDescription.type = "text";
    inputDescription.placeholder = "Description";
    form.appendChild(h2);
    form.appendChild(inputTitle);
    form.appendChild(inputDescription);
    form.appendChild(paraPriority);
    form.appendChild(selectPriority);
    form.appendChild(submit);

    return form;
}

export { createInput }