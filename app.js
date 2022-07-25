const container = document.getElementById("container");
const slider = document.getElementById("slider");
const sliderValue = document.querySelectorAll("#slider-value");
const clearBtn = document.getElementById("clear-btn");
const eraserBtn = document.getElementById("eraser-btn");
const rainbowBtn = document.getElementById("rainbow-btn");
const colorBtn = document.getElementById("color-btn");
const color = document.getElementById("color");
const activeMode = document.querySelector(".active");

let currentMode = "color";
colorBtn.classList.add("active");

let isDrawing = false;
document.body.onmousedown = () => (isDrawing = true);
document.body.onmouseup = () => (isDrawing = false);

eraserBtn.addEventListener("click", ()=> changeMode("eraser"));
rainbowBtn.addEventListener("click", ()=> changeMode("rainbow"));
colorBtn.addEventListener("click", ()=> changeMode  ("color"));

function changeMode(newMode) {
  if (currentMode === "eraser") {
    eraserBtn.classList.remove("active");
  } else if (currentMode === "rainbow") {
    rainbowBtn.classList.remove("active");
  } else if (currentMode === "color") {
    colorBtn.classList.remove("active");
  }

  if (newMode === "eraser") {
    eraserBtn.classList.add("active");
  } else if (newMode === "rainbow") {
    rainbowBtn.classList.add("active");
  } else if (newMode === "color") {
    colorBtn.classList.add("active");
  }
  
  currentMode = newMode;
}

function startStopDraw(e) {
  if (e.type === "mouseover" && !isDrawing) return;
  if (currentMode === "color") {
    e.target.style.backgroundColor = color.value;
  } else if (currentMode === "rainbow") {
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    e.target.style.backgroundColor = `rgb(${r},${g},${b})`;
  } else if (currentMode === "eraser") {
    e.target.style.backgroundColor = "white";
  }
}

function resetSize(size) {
container.style.setProperty('--grid-rows', size);
  container.style.setProperty('--grid-cols', size);
  createGrid(size);
}

function createGrid(size) {
    container.style.setProperty('--grid-rows', size);
    container.style.setProperty('--grid-cols', size);
    for (let i = 0; i < size * size; i++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  

    container.addEventListener("mouseover", startStopDraw);
    container.addEventListener("mousedown", startStopDraw);
      

    function clearGrid() {
      clearBtn.addEventListener("click", ()=>{
        cell.style.backgroundColor = "white";
      })
    }
    
    clearGrid();
    
  }
}

createGrid(slider.value);


sliderValue.forEach(item => item.innerHTML = slider.value);
slider.oninput = ()=>{
  sliderValue.forEach(item => item.innerHTML = slider.value);
    resetSize(slider.value);
}