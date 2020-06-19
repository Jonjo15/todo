function createInput() {
    const form = document.createElement("form");
    const h2 = document.createElement("h2");
    const inputTitle = document.createElement("input");
    inputTitle.type = "text";
    inputTitle.placeholder = "Title";
    form.appendChild(h2);
    form.appendChild(inputTitle);

    return form;
}

export { createInput }