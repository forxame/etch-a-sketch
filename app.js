const container = document.getElementById("container");
const grid = document.querySelectorAll(".grid-item")
let slider = document.getElementById("slider");
let sliderValue = document.querySelectorAll("#slider-value");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(slider.value, slider.value);

container.addEventListener("pointerdown", ()=>{
    container.addEventListener("pointerover", (e)=>{
        if (e.target.matches(".grid-item")) {
            e.target.style.backgroundColor = "green";
        }
    })
    
})

sliderValue.forEach(item => item.innerHTML = slider.value);
slider.oninput = ()=>{
    sliderValue.forEach(item => item.innerHTML = slider.value);
    makeRows(slider.value, slider.value);
}