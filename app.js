const container = document.querySelector(".container");
let gridSize = 50;

for (let i = 1; i < (gridSize * gridSize); i++) {
  const div = document.createElement("div");
  div.className = "pixel";
  container.appendChild(div);
}

const allPixels = document.querySelectorAll(".pixel");

allPixels.forEach((div) => {
  div.addEventListener("mouseover", (e) => {
    div.classList.add("active");
  });
});

const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
  allPixels.forEach((div) => {
      div.classList.remove("active");
  });
});

const grid = document.querySelector("#grid");
grid.addEventListener("click", () => {
  allPixels.forEach((div) => {
    div.classList.toggle("gridOn");
  });
});