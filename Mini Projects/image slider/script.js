var slides = document.querySelectorAll(".slide");
var counter = 0;
var prev = document.getElementById("prev");
var next = document.getElementById("next");

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

const slideImage = () => {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};

prev.addEventListener("click", () => {
  counter--;
  if (counter < 0) {
    counter = slides.length - 1;
  }
  slideImage();
});

next.addEventListener("click", () => {
  counter++;
  if (counter == slides.length) {
    counter = 0;
  }
  slideImage();
});
