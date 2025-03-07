const container = document.querySelector(".container");

function createGrid(numberOfSquaresPerSide = 16) {
    for(let i = 0; i < numberOfSquaresPerSide; i++) {
        const containerTwo = document.createElement("div");
        containerTwo.className = "containerTwo";
        for(let j = 0; j < numberOfSquaresPerSide; j++) {
            const div = document.createElement("div");
            div.className = "lowestDivUnit";
            containerTwo.appendChild(div);
        }
        container.appendChild(containerTwo);
    }
}

createGrid();

function handleTrailEvent(event) {
    const target = event.target;
    if(target.className === "lowestDivUnit") {
        target.classList.add("trailColored");
    }
}

const documentRef = document;

documentRef.addEventListener("mouseover", handleTrailEvent);

function validateInput(input) {
    if(input <= 100 && input >= 1) {
        return true;
    }
    else if(input === NaN) {
        return false;
    }
    else {
        return false;
    }
}

function removeCurrentGrid() {
    const containerTwoRefs = document.querySelectorAll(".containerTwo");
    for(const ref of containerTwoRefs) {
        container.removeChild(ref);
    }
}

function handleButtonClick(event) {
    const target = event.target;
    if(target.className === "btn") {
        let numberOfSquaresPerSide = 
        +prompt(
            "Enter the number of squares per side for the new grid (1-100):"
            , "16"
        );
        let isValidInput = validateInput(numberOfSquaresPerSide);
        if(isValidInput === true) {
            removeCurrentGrid();
            createGrid(numberOfSquaresPerSide);
        }
        else {
            return;
        }        
    }
}

documentRef.addEventListener("click", handleButtonClick);

