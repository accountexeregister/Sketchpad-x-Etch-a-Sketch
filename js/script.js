//create (16 * 16) squares with loop
for (let i = 0; i < 16 * 16; i++) {
    //create and store square in square variable
    const square = document.createElement("div");

    //insert exampleText to square variable
    square.textContent = "yuh";
    
    //append square created to ".container" div
    document.querySelector(".container").
             appendChild(square);
}