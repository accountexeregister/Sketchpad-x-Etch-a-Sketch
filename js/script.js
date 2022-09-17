//create (16 * 16) squares with loop
for (let i = 0; i < 16 * 16; i++) {
    //create and store square in square variable
    const square = document.createElement("div");

    //add ".div-square" class to square created
    square.classList.add("div-square");
    
    //insert exampleText to square variable
    square.textContent = "yuh";
    
    //Add mouseover event listener to the square divs
    //The event listener executes function that changes colour of grid square divs
    //The colour change leaves pixelated trail through the grid like a pen would
    square.addEventListener("mouseover", changeSquareColour);

    //Add mouseend event listener to the square divs
    //The event listener executes function that reverts the colour change of grid squares
    square.addEventListener("mouseleave", revertColourChange);

    //append square created to ".container" div
    document.querySelector(".container").
             appendChild(square);
}

function changeSquareColour() {
    //Add ".div-hover" class to the square div
    this.classList.add("div-hover");
}

function revertColourChange() {
    //Remove ".div-hover" class from the square div
    this.classList.remove("div-hover");
}


