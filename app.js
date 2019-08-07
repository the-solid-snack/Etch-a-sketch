const container = document.querySelector(".container");
let gridSize = Number(window.prompt("taille?", 256));

for (let i = 1; i < gridSize; i++) {
  console.log(gridSize);
  console.log(i);
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