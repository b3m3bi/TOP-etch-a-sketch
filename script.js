let container = document.querySelector(".container");

// canvas width in px
const canvasWidth = 500;
container.style.width = `${canvasWidth}px`;
container.style.height = `${canvasWidth}px`;


function createGrid(gridSize, canvasWidth){
    // square width in px
    let squareWidth =  canvasWidth / gridSize;

    // clear canvas
    container.innerHTML = '';

    // create grid
    for(let i = 0; i < gridSize; i++){
        for(let j = 0; j < gridSize; j++){
            let square = document.createElement("div");
            square.className = "square";
            square.style.width = `${squareWidth}px`;
            square.style.height = `${squareWidth}px`;
            container.appendChild(square);
        }
    }

}

// initialize
createGrid(40, canvasWidth);


container.addEventListener('mouseover', (event) => {
    let target = event.target;
    target.classList.add('coloreado');

})

const resizeBtn = document.querySelector('#resizeBtn');

function resizeAndResetGrid(){
    let gridSize = prompt("Set grid size (1, 100):");
    if (!Number.isInteger(+gridSize) || gridSize < 1 || gridSize > 100 ) {
        alert("Invalid value, pleas enter an integer between 1 and 100")
    } else {
        createGrid(gridSize, canvasWidth);
    }
}

resizeBtn.addEventListener('click', resizeAndResetGrid);