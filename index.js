// variables
const output = document.querySelector(".secondRow");
<<<<<<< HEAD
// buttons
const buttons = document.getElementsByClassName("button");
const del = document.querySelector(".del");
const resetButton = document.querySelector(".reset");
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const dot = document.querySelector(".dot");
const divide = document.querySelector(".divide");
const equal = document.querySelector(".equal");
const times = document.querySelector(".x");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    output.insertAdjacentHTML("beforeend", buttons[i].innerHTML);
=======
const operators = document.querySelectorAll(".operator");
// buttons
const buttons = document.getElementsByClassName("button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    let btn = button[i].innerHTML;
    if (btn !== "DEL" && btn !== "RESET") {
      output.insertAdjacentHTML("beforeend", buttons[i].innerHTML);
    }
>>>>>>> parent of b62ae40 (Update index.js)

    calculate();
  });
}

function calculate() {
  console.log(math.evaluate(output.innerHTML));
}
