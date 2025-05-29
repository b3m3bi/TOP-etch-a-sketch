let container = document.querySelector(".container");

// canvas width in px
const canvasWidth = 800;
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
            // square.style.height = `${squareWidth}px`;
            container.appendChild(square);
        }
    }

}

// initialize
createGrid(40, canvasWidth);

function randomNumber(num){
    return Math.floor(Math.random() * (num + 1));
}


let randomColorsCheckbox = document.querySelector('#random_colors');
let opacityCheckbox = document.querySelector('#opacity');

container.addEventListener('mouseover', (event) => {
    let target = event.target;
    let opacityValue = opacityCheckbox.checked ? 0.1 : 1;

    if (!target.classList.contains('coloreado')){
        target.classList.add('coloreado');
        if (randomColorsCheckbox.checked){
            target.style.backgroundColor = `rgba(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)}, ${opacityValue})`;
        } else {
            target.style.backgroundColor = `rgba(0, 0, 0, ${opacityValue})`;
        }
    } else {
        let rgba = target.style.backgroundColor.slice(5, -1).split(',').map(elem => +elem);
        if (rgba[3] < 1){
            target.style.backgroundColor = `rgba(${rgba[0]}, ${rgba[1]}, ${rgba[2]}, ${rgba[3] + 0.1})`;
        }
    }

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