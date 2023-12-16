const LENGTH = 600;
const DEFAULTSIZE = 16;


const container = document.querySelector('#area');
const sliderContainer = document.querySelector('#slider-container');
const slider = document.querySelector('#slider');
const size = document.querySelector('#size');

size.textContent = `${slider.value} x ${slider.value} Resolution`;

container.style.width = `${LENGTH}px`;
container.style.height = `${LENGTH}px`;

function changeColour() {
    this.style.backgroundColor = 'black';
}

function createGrid(num) {
    for (let i = 0; i < (num * num); i++) {
        const grid = document.createElement("div");

        grid.style.width = `${(LENGTH / num)-2}px`;
        grid.style.rows = `${(LENGTH / num)-2}px`;
        grid.classList.add("cell");
        grid.addEventListener ('mouseover', changeColour);
        container.append(grid);
    }
}

function removeGridCells() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

slider.oninput = function () {
    let txt = `${this.value} x ${this.value} Resolution`;
    size.innerHTML = txt;
    removeGridCells();
    createGrid(this.value);
}

createGrid(DEFAULTSIZE);
