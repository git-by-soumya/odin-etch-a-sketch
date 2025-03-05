const container = document.querySelector(".container");

for(let i = 0; i < 16; i++) {
    const secondaryContainer = document.createElement("div");
    secondaryContainer.classList.toggle("secondary-container")

    for(let j = 0; j < 16; j++) {
        const div = document.createElement("div");
        div.classList.toggle("div-class");

        secondaryContainer.appendChild(div);
    }

    container.appendChild(secondaryContainer);
}
