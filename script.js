let container = document.querySelector(".container");

let gridSize = 30;
container.style.width = `${gridSize * 10}px`;

for(let i = 0; i < gridSize; i++){
    for(let j = 0; j < gridSize; j++){
        let square = document.createElement("div");
        square.className = "square";
        container.appendChild(square);
    }
}

container.addEventListener('mouseover', (event) => {
    let target = event.target;

    target.classList.add('coloreado');
})