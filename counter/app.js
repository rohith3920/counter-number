let counters = document.querySelector("#counterValue");
let incrementbtn = document.querySelector("#increment");
let resetbtn = document.querySelector("#reset");
let decrenmentbtn = document.querySelector("#decrement");

let counter = 0;

counters.textContent = counter;

function increments() {
  counter = counter + 1;
  counters.textContent = counter;
}

function resets() {
  counter = 0;
  counters.textContent = counter;
}

function decrements() {
  counter = counter - 1;
  counters.textContent = counter;
}

incrementbtn.addEventListener("click", increments);
resetbtn.addEventListener("click", resets);
decrenmentbtn.addEventListener("click", decrements);
