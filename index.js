// variables
const output = document.querySelector(".secondRow");
const operators = document.querySelectorAll(".operator");
// buttons
const buttons = document.getElementsByClassName("button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    let btn = buttons[i].innerHTML;
    if (btn == "RESET") {
      output.innerHTML = " ";
    }
    if (btn == "DEL") {
      output.innerHTML = output.innerHTML.slice(0, -1);
    } else if (btn !== "DEL" && btn !== "RESET" && btn !== "=") {
      output.insertAdjacentHTML("beforeend", buttons[i].innerHTML);
    }

    if (btn == "=") {
      calculate();
    }
  });
}

function calculate() {
  output.innerHTML = math.evaluate(output.innerHTML);
}
