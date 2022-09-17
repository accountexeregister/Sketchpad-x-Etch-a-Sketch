//create 16 * 16 square grid
createSquareGrid(16);

//store button element as button variable
const button = document.querySelector(".click");
//add click event listener to button that prompt user for
//number of squares per side
button.addEventListener("click", promptSquareSideNum);

function promptSquareSideNum() {
    //prompts user for number of squares per side
    //and stores it in variable squareSideNum
    let squareSideNum = parseInt(prompt("Enter the number of square sides for the new grid"));
    //cancels prompt is user input is not a number and alerts user that user input is not a number
    if (isNaN(squareSideNum)) {
        alert("Your input is not a number");
        return;
    }
    //cancels prompt if user input > 100 and alerts user that user input is too large
    if (squareSideNum > 100) {
        alert("Your input is too high. Please enter an input that is less than 100");
        return;
    }

    //delete the container and all its child elements and store array of width
    //and height in variable arrayOfDimensions
    let arrayOfDimensions = removeContainer();

    //get width of container and store in variable containerWidth
    let containerWidth = arrayOfDimensions[0];
    //get height of container and store in variable containerHeight
    let containerHeight = arrayOfDimensions[1];
    
    //create new container with same containerWidth and containerHeight as
    //previously deleted container
    createContainer(containerWidth, containerHeight, squareSideNum);

    //create new container with same containerWidth and containerHeight as
    //previously deleted container
    createSquareGrid(squareSideNum);

    //adjust container with width: containerWidth and height: containerHeight
    const container = document.querySelector(".container");
    container.style.setProperty("max-width", containerWidth);
    container.style.setProperty("max-height", containerHeight);
    
}

function createContainer(containerWidth, containerHeight, squareSides) {
    //creates new container variable = container, 
    const container = document.createElement("div");
    //add ".container" class to container created;
    container.classList.add("container");

    //adjust container with width: containerWidth and height: containerHeight
    container.style.width = containerWidth;
    container.style.height = containerHeight;

    //adjust container grid-template-columns and grid-template-rows with new squareSides
    container.style.setProperty("grid-template-columns", `repeat(${squareSides}, 1fr)`);
    container.style.setProperty("grid-template-rows", `repeat(${squareSides}, 1fr)`);
    //append container to body
    document.querySelector("body").appendChild(container);
    
}   
function createSquareGrid(squareSides) {
    //create (squareSides * squareSides) squares with loop
    for (let i = 0; i < squareSides * squareSides; i++) {
        //create and store square in square variable
        const square = document.createElement("div");
    
        //add ".div-square" class to square created
        square.classList.add("div-square");
    
        //insert exampleText to square variable
        //square.textContent = "yuh";
        
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
}
function removeContainer() {
    //get width of container and store in variable containerWidth
    let containerWidth = document.querySelector(".container").clientWidth;

    //get height of container and store in variable containerHeight
    let containerHeight = document.querySelector(".container").clientHeight;
    //delete container
    document.querySelector("body").removeChild(document.querySelector(".container"));
    return [containerWidth, containerHeight];
}
function changeSquareColour() {
    //Add ".div-hover" class to the square div
    this.classList.add("div-hover");
}

function revertColourChange() {
    //Remove ".div-hover" class from the square div
    this.classList.remove("div-hover");
}


