const wrapper = document.querySelector(".wrapper");
let gridSize = 16;

for (let i = 0; i < 256; i++) {
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

const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
  allPixels.forEach((div) => {
      div.classList.remove("active");
  });
});