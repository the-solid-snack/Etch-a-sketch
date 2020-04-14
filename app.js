const wrapper = document.querySelector(".wrapper");
let gridSize = 256;
let root = document.documentElement;

function createGrid() {
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

const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
  const allPixels = document.querySelectorAll(".pixel");
  allPixels.forEach((div) => {
      div.classList.remove("active");
  });
});

const start = document.querySelector("#start");
start.addEventListener("click", () => {
  createGrid();
});

const threeTwo = document.querySelector("#32");
plus.addEventListener("click", () => {
  
});