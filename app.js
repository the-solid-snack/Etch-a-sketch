const wrapper = document.querySelector(".wrapper");
let gridSize=256;
let root = document.documentElement;

function createGrid(gridSize) {
  let gridArea = gridSize;
  for (let i = 0; i < gridSize; i++) {
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
  resetGrid();
});

const plus = document.querySelector("#plus");
plus.addEventListener ("click", () => {
  root.style.setProperty("--rowNum", 32);
  root.style.setProperty("--colNum", 32);
  createGrid(1024);
});