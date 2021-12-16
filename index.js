// variables
const output = document.querySelector(".secondRow");
const operators = document.querySelectorAll(".operator");
// buttons
const buttons = document.getElementsByClassName("button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    let btn = button[i].innerHTML;
    if (btn !== "DEL" && btn !== "RESET") {
      output.insertAdjacentHTML("beforeend", buttons[i].innerHTML);
    }

    calculate();
  });
}

function calculate() {
  console.log(math.evaluate(output.innerHTML));
}
