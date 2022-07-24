const container = document.getElementById("container");
let slider = document.getElementById("slider");
let sliderValue = document.querySelectorAll("#slider-value");
const clearBtn = document.getElementById("clear-btn");
let color = document.getElementById("color")

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
    
    
        function startDrawing(e) {
            cell.addEventListener("mouseover", ()=>{
                cell.style.backgroundColor = color.value;
            })
        }

        function stopDrawing(e) {
            cell.removeEventListener("mouseover")
        }

    container.addEventListener("mousedown", startDrawing);
    // container.addEventListener("mouseup", stopDrawing);

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