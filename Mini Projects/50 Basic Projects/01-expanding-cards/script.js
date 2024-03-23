const panels = document.querySelectorAll(".panel");

let counter = 0;

setInterval(() => {
  removeActiveClasses();
  panels[counter].classList.add("active");
  counter++;

  if (counter >= panels.length) {
    counter = 0;
  }
}, 4000);

panels.forEach((panel, index) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    counter = index;
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
