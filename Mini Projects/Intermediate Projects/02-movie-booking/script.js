const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");

const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

let ticketPrice = +movieSelect.value;

function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");

  count.innerText = selectedSeats.length;
  total.innerText = selectedSeats.length * ticketPrice;
}

movieSelect.addEventListener("change", (event) => {
  ticketPrice = +event.target.value;
  updateSelectedCount();
});

container.addEventListener("click", (event) => {
  if (
    event.target.classList.contains("seat") &&
    !event.target.classList.contains("occupied")
  ) {
    event.target.classList.toggle("selected");

    updateSelectedCount();
  }
});
