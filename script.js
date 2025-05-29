let container = document.querySelector(".container");

const colorsRGB = {
    black: [0,0,0],
    red: [246,0,0],
    orange: [255,140,0],
    yellow: [255,238,0],
    green: [77,233,76], 
    blue: [55,131,255], 
    violet: [72,21,170]
}


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
    for(let i = 0; i < gridSize * gridSize; i++){
        let square = document.createElement('div');
        square.className = 'square';
        square.style.flexBasis = `${100/gridSize}%`;
        container.appendChild(square);
    }

}

function randomNumber(num){
    return Math.floor(Math.random() * num);
}

function randomElementFromArray(arr){
    let randomIndex = randomNumber(arr.length);
    return arr[randomIndex];
}


let rainbowCheckbox = document.querySelector('#rainbow');
let opacityCheckbox = document.querySelector('#opacity');
let eraserCheckbox = document.querySelector('#eraser');

container.addEventListener('mouseover', (event) => {
    let target = event.target;

    if (eraserCheckbox.checked){
        // si está activado el borrador, borrar
        target.style.backgroundColor = '';
        target.className = 'square';
    } else {
        // si está descactivado el borrador, pintar...
        let rainbowColors = ['red','orange','yellow','green','blue','violet']
        let color = rainbowCheckbox.checked ? randomElementFromArray(rainbowColors) : document.querySelector('input[name="color"]:checked').id;
        let colorRGB = colorsRGB[color]

        if (!target.classList.contains(color)){
            let opacityValue = opacityCheckbox.checked ? 0.1 : 1;
            target.style.backgroundColor = `rgba(${colorRGB[0]}, ${colorRGB[1]}, ${colorRGB[2]}, ${opacityValue})`;
            target.className = `square ${color}`;
        } else {
            let rgba = target.style.backgroundColor.slice(5, -1).split(',').map(elem => +elem);
            if (rgba[3] < 1){
                target.style.backgroundColor = `rgba(${rgba[0]}, ${rgba[1]}, ${rgba[2]}, ${rgba[3] + 0.1})`;
            }
        }

    }
})


const resizeBtn = document.querySelector('#resizeBtn');
let canvasSize = document.querySelector('#canvas-size');
const canvasSizeDisplay = document.querySelector('#canvas-size-value');
canvasSizeDisplay.innerHTML = canvasSize.value;

canvasSize.addEventListener('input', () => {
    canvasSizeDisplay.innerHTML = canvasSize.value;
})

canvasSize.addEventListener('change', () => {
    createGrid(canvasSize.value, canvasWidth);
})


// resizeBtn.addEventListener('click', resizeAndResetGrid);

const eraseBtn = document.querySelector('#erase-all');

eraseBtn.addEventListener('click', () => {
    createGrid(canvasSize.value, canvasWidth);
})

// initialize
createGrid(canvasSize.value, canvasWidth);