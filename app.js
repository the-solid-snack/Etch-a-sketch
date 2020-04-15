const wrapper = document.querySelector(".wrapper");
let gridSize = 256;
let root = document.documentElement;

function createGrid(gridSize) {
  do {
  gridSize = prompt("How large a grid do yo want", "16");
  } while (gridSize < 0 && gridSize > 100);

  for (let i = 0; i < gridSize*gridSize; i++) {
    const div = document.createElement("div");
    div.className = "pixel";
    wrapper.appendChild(div);
  }
  const allPixels = document.querySelectorAll(".pixel");
  allPixels.forEach((div) => {
    div.addEventListener("mouseover", (e) => {
      div.classList.add("active");
    });
  });
}

function resetGrid() {
  const reset = document.querySelector("#reset");
  reset.addEventListener("click", () => { 
    const allPixels = document.querySelectorAll(".pixel");
    allPixels.forEach((div) => {
        div.classList.remove("active");
    });
  });
}

const start = document.querySelector("#start");
start.addEventListener("click", () => {
  createGrid();
});

const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
  reset();
});

const plus = document.querySelector("#plus");
plus.addEventListener ("click", () => {
  createGrid();
  root.style.setProperty("--rowNum", gridSize);
  root.style.setProperty("--colNum", gridSize);
});