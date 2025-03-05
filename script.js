function divGridCreator() {
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
}

divGridCreator();

function changeColorOnHover(event) {
    const target = event.target;
    if(target.classList[0] === "div-class") {
        target.classList.add("div-trail");
    }
}

const doc = document;
doc.addEventListener("mouseover", changeColorOnHover);

const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
    const size = +prompt(
        "Enter the number of squares per side for the new grid:");
});
