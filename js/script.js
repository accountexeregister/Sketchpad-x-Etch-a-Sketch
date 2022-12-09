 //add "red" attribute 
 document.createAttribute("red");
 //add "green" attribute
 document.createAttribute("green");
 //add "blue" attribute 
 document.createAttribute("blue");
 document.ondblclick = function(e) {
    e.preventDefault();
}
//create 100 * 100 square grid
createSquareGrid(100);

//store initial container array dimensions in initialArrayDimensions and remove initial container
let initialArrayDimensions = removeContainer();

//store initial width of container as initialContainerWidth
let initialContainerWidth = initialArrayDimensions[0];
//store initial height of container as initialContainerHeight
let initialContainerHeight = initialArrayDimensions[1];

//set initialContainerWidth = initialContainerHeight (maximum value used as common value)
if (initialContainerWidth > initialContainerHeight) {
    initialContainerHeight = initialContainerWidth;   
} else {
    initialContainerWidth = initialContainerHeight;
}

//create new container with initialContainerWidth and initialContainerHeight(both same size)
//to store 16 * 16 squares
createContainer(initialContainerWidth, initialContainerHeight, 16);

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

 
    
}

function createContainer(containerWidth, containerHeight, squareSides) {
    //creates new container variable = container, 
    const container = document.createElement("div");
    //add ".container" class to container created;
    container.classList.add("container");

    //adjust container with min-width: containerWidth and min-height: containerHeight
    container.style.setProperty("height", `${containerHeight}px`);
    container.style.setProperty("width", `${containerWidth}px`);

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
       
        
        //Add mouseover,touchstart, touchmove event listener to the square divs
        //The event listener executes function that changes colour of grid square divs
        //The colour change leaves pixelated trail through the grid like a pen would
        square.addEventListener("mouseover", changeSquareColour);
        square.addEventListener("touchstart", changeSquareColour);
        square.addEventListener("touchmove", changeSquareColour);
    
        //Add mouseend, touchend, touchmove event listener to the square divs
        //The event listener executes function that reverts the colour change of grid squares
        square.addEventListener("mouseleave", revertColourChange);
        square.addEventListener("touchend", revertColourChange);
    
        //append square created to ".container" div
        document.querySelector(".container").
                 appendChild(square);

         
    }

    /*Removed 
    //adjust squares height to be same as width
    document.querySelectorAll(".div-square", (square) => {
    let squareWidth = square.clientWidth;
    square.style.height = `${squareWidth}px`;
    });

    //check to see if width of square of height of square is bigger
    let square = document.querySelector(".div-square");

    //if square width > square height
    if (square.clientWidth > square.clientHeight) {
        //store difference between width and height of square in variable widthMinusHeight
        let widthMinusHeight = square.clientWidth - square.clientHeight;
        //set ".container" column gap to be widthMinusHeight px
        document.querySelector(".container").style.setProperty("column-gap", `${widthMinusHeight}px`);
    } //else if square height > square width
    else if (square.clientHeight > square.clientWidth) {
        //store difference between height and width of square in variable heightMinusWidth
        let heightMinusWidth = square.clientHeight - square.clientWidth;
        //set ".container" row gap to be heightMinusWidth px
        document.querySelector(".container").style.setProperty("row-gap", `${heightMinusWidth}px`);
    }
    */
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
    /*Removed temporarily 
    //Add ".div-hover" class to the square div
    this.classList.add("div-hover");
    */

    //initialise r, g and b variables
    let r = this.getAttribute("red");
    let g = this.getAttribute("green");
    let b = this.getAttribute("blue");

    //generate random rgb value if colour does not exist yet
    if ((r === null && g === null && b === null)) {
        r = Math.floor(Math.random() * 256);
        g = Math.floor(Math.random() * 256);
        b = Math.floor(Math.random() * 256);
    }
    // Generate random rgb value if colour becomes close to black
    else if (((r * 1 + g * 1 + b * 1) / 3) < 33) {
        r = Math.floor(Math.random() * 256);
        g = Math.floor(Math.random() * 256);
        b = Math.floor(Math.random() * 256);
    }
    // else get red, green and blue values and multiply them by 0.9 or 90%;
    else { 
        r = r * 0.95;
        g = g * 0.95;
        b = b * 0.95;
    }
    //set the "red", "green" and "blue" attribute to their values
    this.setAttribute("red", r);
    this.setAttribute("green", g);
    this.setAttribute("blue", b);
    
    //set background colour style on square using random colour string
    this.style.setProperty("background-color", `rgb(${r}, ${g}, ${b})`);
}

function getRGBValue(rgbText) {

    while (rgbText.includes(",")) {

    }
    //remove first letter until first letter is a number
    while (isNaN(parseInt(rgbText.charAt(0)))) {
        rgbText = rgbText.slice(1, rgbText.length);
    }

    //remove last letter until last letter is a number
    while (isNaN(parseInt(rgbText.charAt(rgbText.length - 1)))) {
        rgbText = rgbText.slice(0, rgbText.length - 1);
    }

    
}
function revertColourChange() {
    /*Removed temporarily
    //Remove ".div-hover" class from the square div
    this.classList.remove("div-hover");
    */

    //remove background colour property from square
    this.style.removeProperty("background-color");
}


